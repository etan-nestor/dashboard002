'use client'

import { motion } from 'framer-motion'
import { HelpCircle, Mail, Phone, MessageSquare, FileText, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const faqs = [
  {
    question: "Comment ajouter un nouveau médicament ?",
    answer: "Allez dans la section Médicaments et cliquez sur le bouton 'Ajouter'. Remplissez le formulaire et sauvegardez."
  },
  {
    question: "Comment générer une facture ?",
    answer: "Dans la section Ventes, sélectionnez une vente et cliquez sur l'icône d'impression pour générer la facture."
  },
  {
    question: "Comment modifier les informations d'un client ?",
    answer: "Trouvez le client dans la section Clients, cliquez sur l'icône de modification et mettez à jour les informations."
  },
  {
    question: "Que faire en cas de problème technique ?",
    answer: "Contactez notre support technique par email ou téléphone. Essayez de redémarrer l'application avant de nous contacter."
  }
]

export default function AidePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div className="flex items-center space-x-3">
        <HelpCircle className="w-8 h-8 text-green-400" />
        <h1 className="text-2xl font-bold text-white">Centre d'aide</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FAQ */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-white">Questions fréquentes</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                <AccordionTrigger className="text-gray-300 hover:text-green-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-white">Contactez-nous</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <Mail className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h3 className="text-white">Email</h3>
                <p className="text-gray-400">support@openpharma.com</p>
                <Button variant="link" className="text-green-400 p-0 h-auto">
                  Envoyer un email
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <Phone className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h3 className="text-white">Téléphone</h3>
                <p className="text-gray-400">+226 65 03 37 42</p>
                <p className="text-gray-400 text-sm">9h-17h, du lundi au vendredi</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <MessageSquare className="w-5 h-5 text-green-400 mt-0.5" />
              <div>
                <h3 className="text-white">Chat en direct</h3>
                <p className="text-gray-400">Disponible 24/7</p>
                <Button variant="link" className="text-green-400 p-0 h-auto">
                  Démarrer une conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ressources */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Ressources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto py-4 flex flex-col items-start border-gray-700 bg-gray-800/50 hover:bg-gray-700">
            <div className="flex items-center mb-2">
              <FileText className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-white">Documentation</span>
            </div>
            <p className="text-gray-400 text-sm text-left">
              Guide complet d'utilisation de l'application
            </p>
          </Button>

          <Button variant="outline" className="h-auto py-4 flex flex-col items-start border-gray-700 bg-gray-800/50 hover:bg-gray-700">
            <div className="flex items-center mb-2">
              <Video className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-white">Tutoriels vidéo</span>
            </div>
            <p className="text-gray-400 text-sm text-left">
              Apprenez à utiliser toutes les fonctionnalités
            </p>
          </Button>

          <Button variant="outline" className="h-auto py-4 flex flex-col items-start border-gray-700 bg-gray-800/50 hover:bg-gray-700">
            <div className="flex items-center mb-2">
              <HelpCircle className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-white">Forum communautaire</span>
            </div>
            <p className="text-gray-400 text-sm text-left">
              Posez vos questions à notre communauté
            </p>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}