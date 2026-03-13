'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppButton({ 
  phoneNumber = '5511912345678',
  message = 'Olá! Gostaria de mais informações sobre a paróquia.'
}: WhatsAppButtonProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-shadow duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </motion.a>
  )
}
