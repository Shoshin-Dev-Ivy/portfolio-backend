/* backend/src/index.ts */
import 'dotenv/config'
import app from './app'

// 🔐 Vérification clé admin
if (!process.env.ADMIN_KEY_HASH) {
  console.error('❌ ADMIN_KEY manquant dans les variables d’environnement')
  process.exit(1)
}

const PORT = process.env.PORT || 4000

// 🔹 Serveur HTTP simple pour dev local
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`)
})




