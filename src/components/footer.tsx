import { Twitter, Linkedin, Globe } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      <div className="container mx-auto px-4 text-center text-gray-200">
        <p>Made with 🧠 by Aquib</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://x.com/Sayyed_Aquibb" target="_blank" rel="noopener noreferrer" aria-label="X">
            <Twitter className="w-6 h-6 text-gray-200 hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/sayyedaquib/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-6 h-6 text-gray-200 hover:text-primary" />
          </a>
          <a href="https://aquib-s-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
            <Globe className="w-6 h-6 text-gray-200 hover:text-primary" />
          </a>
        </div>
      </div>
    </footer>
  )
}