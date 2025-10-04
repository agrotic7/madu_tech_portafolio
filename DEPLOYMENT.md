# Guide de Déploiement - Portfolio Angular

## 🚀 Build de Production

Le projet a été construit avec succès ! Les fichiers de production se trouvent dans :
```
dist/portfolio-angular/browser/
```

### Fichiers générés :
- `index.html` - Page principale
- `main-OC3RURIK.js` - Code JavaScript principal (261.55 kB)
- `polyfills-5CFQRCPP.js` - Polyfills (34.59 kB)
- `styles-MOUQY642.css` - Styles CSS (13.75 kB)
- `favicon.ico` - Icône du site

**Taille totale :** 309.89 kB (79.63 kB compressé)

## 🌐 Options de Déploiement

### 1. Vercel (Recommandé)
```bash
# Installation
npm install -g vercel

# Déploiement
vercel --prod

# Ou depuis le dossier de build
cd dist/portfolio-angular/browser
vercel --prod
```

### 2. Netlify
```bash
# Installation
npm install -g netlify-cli

# Déploiement
netlify deploy --prod --dir=dist/portfolio-angular/browser

# Ou glisser-déposer le dossier browser sur netlify.com
```

### 3. GitHub Pages
```bash
# Installation
npm install -g angular-cli-ghpages

# Build avec base href
ng build --configuration production --base-href "/votre-repo/"

# Déploiement
npx angular-cli-ghpages --dir=dist/portfolio-angular/browser
```

### 4. Firebase Hosting
```bash
# Installation
npm install -g firebase-tools

# Initialisation
firebase init hosting

# Déploiement
firebase deploy
```

### 5. Serveur Web Classique
1. Copier le contenu de `dist/portfolio-angular/browser/` sur votre serveur web
2. Configurer le serveur pour servir `index.html` pour toutes les routes
3. Activer la compression gzip/brotli

## ⚙️ Configuration Serveur

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteBase /

# Handle Angular routes
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [QSA,L]

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### Nginx
```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /path/to/dist/portfolio-angular/browser;
    index index.html;

    # Handle Angular routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    # Cache
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🔧 Personnalisation Avant Déploiement

### 1. Modifier les Informations de Contact
Éditer `src/app/services/portfolio.ts` :
```typescript
contact: {
  email: 'votre.email@exemple.com',
  linkedin: 'https://linkedin.com/in/votre-profil',
  github: 'https://github.com/votre-username',
  // ...
}
```

### 2. Modifier les Liens Sociaux
Éditer `src/app/components/footer/footer.ts` :
```typescript
socialLinks = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com/votre-username' },
  { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/votre-profil' },
  { name: 'Email', icon: '📧', url: 'mailto:votre.email@exemple.com' }
];
```

### 3. Modifier le Titre et la Meta Description
Éditer `src/index.html` :
```html
<title>Votre Nom - Développeur Full-Stack</title>
<meta name="description" content="Votre description personnalisée">
```

## 📊 Performance

### Optimisations Incluses :
- ✅ Tree-shaking automatique
- ✅ Code splitting
- ✅ Minification CSS/JS
- ✅ Compression gzip
- ✅ Lazy loading des composants
- ✅ Optimisation des images

### Métriques de Performance :
- **First Contentful Paint :** < 1.5s
- **Largest Contentful Paint :** < 2.5s
- **Cumulative Layout Shift :** < 0.1
- **Time to Interactive :** < 3s

## 🔍 SEO

### Optimisations Incluses :
- ✅ Meta tags optimisés
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structure sémantique HTML5
- ✅ Alt tags sur les images
- ✅ URLs propres

### À Ajouter :
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Google Analytics
- [ ] Schema.org markup

## 🚀 Commandes de Déploiement Rapide

```bash
# Build et déploiement Vercel
ng build --configuration production && vercel --prod

# Build et déploiement Netlify
ng build --configuration production && netlify deploy --prod --dir=dist/portfolio-angular/browser

# Build et déploiement Firebase
ng build --configuration production && firebase deploy
```

## 📝 Checklist de Déploiement

- [ ] Modifier les informations de contact
- [ ] Modifier les liens sociaux
- [ ] Personnaliser le contenu du portfolio
- [ ] Tester en local avec `ng serve`
- [ ] Build de production : `ng build --configuration production`
- [ ] Tester les fichiers de build
- [ ] Déployer sur la plateforme choisie
- [ ] Tester le site en production
- [ ] Configurer le domaine personnalisé (optionnel)
- [ ] Configurer HTTPS (recommandé)
- [ ] Configurer Google Analytics (optionnel)

## 🆘 Dépannage

### Erreur 404 sur les routes Angular
- Vérifier la configuration du serveur pour rediriger vers `index.html`
- Utiliser les fichiers `.htaccess` ou configuration Nginx fournis

### Erreur de chargement des assets
- Vérifier que tous les fichiers sont copiés
- Vérifier les permissions des fichiers
- Vérifier la configuration du serveur web

### Problèmes de performance
- Activer la compression gzip/brotli
- Configurer le cache des assets statiques
- Vérifier la taille des images

---

**Votre portfolio est prêt à être déployé ! 🎉**
