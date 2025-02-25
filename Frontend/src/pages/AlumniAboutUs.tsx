const AlumniAboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            {/* Header */}
            <header className="bg-orange-600 text-white py-20 text-center shadow-md">
                <h1 className="text-5xl font-extrabold">📖 About Us</h1>
                <p className="mt-2 text-lg font-medium">Reconnect with friends and grow your professional network.</p>
            </header>

            {/* Content Section */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eros eget neque
                    fermentum convallis. Ut suscipit, augue in interdum vehicula, sapien nunc faucibus erat,
                    id feugiat felis odio sed risus. Cras convallis orci ut ex pharetra, id ultrices urna dictum.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-4xl font-bold text-orange-700 text-center mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et felis nec justo tincidunt
                    condimentum. Donec sodales nulla non arcu interdum, ut cursus elit efficitur.
                </p>
            </section>
        </div>
    );
};

export default AlumniAboutUs;