import faiss
import numpy as np
from fastapi import FastAPI, Query
from langchain_huggingface import HuggingFaceEmbeddings


# Initialize FastAPI
app = FastAPI(title="FastAPI FAISS Word Search", version="1.1")

# Function to load words from a .txt file
def load_words(file_path):
    """Loads words from a text file (one word per line)."""
    with open(file_path, "r", encoding="utf-8") as f:
        words = [line.strip() for line in f.readlines() if line.strip()]
    return words

# Load words from the file
words = load_words("navbar_names.txt")

# Load Hugging Face embeddings model
huggingface_embeddings = HuggingFaceEmbeddings(
    model_name="BAAI/bge-small-en-v1.5",
    model_kwargs={'device': 'cpu'},
    encode_kwargs={'normalize_embeddings': True}  # Normalize for cosine similarity
)


# Compute embeddings for each word
word_embeddings = np.array([huggingface_embeddings.embed_query(word) for word in words])

# Create FAISS index with cosine similarity
dimension = word_embeddings.shape[1]
index = faiss.IndexFlatIP(dimension)  # Inner Product (Cosine Similarity)
index.add(word_embeddings)

# Function to search for the closest matching word
def search_word(query: str, top_k=1, threshold=0.6):
    """Finds the closest match for a misspelled word using FAISS."""
    query_embedding = np.array([huggingface_embeddings.embed_query(query)])  # Embed query
    distances, indices = index.search(query_embedding, top_k)  # Search FAISS

    # Check if the highest similarity score is above threshold
    best_match_index = indices[0][0]
    best_match_score = distances[0][0]  # Cosine similarity score

    if best_match_score < threshold:  # If similarity is too low, return "Not Found"
        return ["Not Found"]

    # Retrieve and return the closest words
    closest_words = [words[i] for i in indices[0]]
    return closest_words

# FastAPI endpoint for searching words
@app.get("/search")
def search(query: str = Query(..., description="Search for a word (even if misspelled)"), top_k: int = 1):
    """API Endpoint to return the closest matching word from FAISS."""
    closest_matches = search_word(query, top_k)
    return {"query": query, "closest_matches": closest_matches}

