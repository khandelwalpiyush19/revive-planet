'use client'

export default function LeaderboardPage() {


    return (
        <>
            <div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
                    <div className="flex justify-between items-center text-white">
                        <span className="text-2xl font-bold">Contact us </span>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-8 font-sans bg-gray-100">  <p className="mb-4">We'd love to hear from you! Whether you have questions, feedback, or want to get involved, please reach out to us using the information below.</p> <h2 className="text-2xl font-semibold mb-2">Email</h2> <ul className="mb-4"> <li><strong>General Inquiries:</strong> <a className="text-blue-500" href="mailto:info@reviveplanet.org">info@reviveplanet.org</a></li> <li><strong>Support:</strong> <a className="text-blue-500" href="mailto:support@reviveplanet.org">support@reviveplanet.org</a></li> <li><strong>Partnerships:</strong> <a className="text-blue-500" href="mailto:partnerships@reviveplanet.org">partnerships@reviveplanet.org</a></li> </ul> <h2 className="text-2xl font-semibold mb-2">Phone</h2> <ul className="mb-4"> <li><strong>Customer Service:</strong> +91-123-456-7890</li> <li><strong>Office Hours:</strong> Mon-Fri, 9 AM - 6 PM</li> </ul> <h2 className="text-2xl font-semibold mb-2">Address</h2> <p className="mb-4"> Revive Planet Headquarters<br /> 123 Green Lane<br /> Ladpura, Rajasthan, India </p> <h2 className="text-2xl font-semibold mb-2">Social Media</h2> <ul className="mb-4"> <li><a className="text-blue-500" href="https://facebook.com/reviveplanet" target="_blank" rel="noopener noreferrer">Facebook</a></li> <li><a className="text-blue-500" href="https://twitter.com/reviveplanet" target="_blank" rel="noopener noreferrer">Twitter</a></li> <li><a className="text-blue-500" href="https://instagram.com/reviveplanet" target="_blank" rel="noopener noreferrer">Instagram</a></li> </ul> <h2 className="text-2xl font-semibold mb-2">Contact Form</h2> <form className="space-y-4"> <div> <label className="block text-sm font-medium text-gray-700"> Name: <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" type="text" name="name" required /> </label> </div> <div> <label className="block text-sm font-medium text-gray-700"> Email: <input className="mt-1 block w-full p-2 border border-gray-300 rounded-md" type="email" name="email" required /> </label> </div> <div> <label className="block text-sm font-medium text-gray-700"> Message: <textarea className="mt-1 block w-full p-2 border border-gray-300 rounded-md" name="message" required></textarea> </label> </div> <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Submit</button> </form> </div>


                </div>
            </div>

        </>
    )
}