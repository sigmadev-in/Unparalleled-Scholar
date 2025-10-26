# 🚀 Deployment Guide - Unparalleled Scholar

## Deployment Options

This guide covers deploying Unparalleled Scholar to various platforms.

---

## 📦 Pre-Deployment Checklist

- [ ] All tests pass
- [ ] Environment variables configured
- [ ] Database connection tested (if using MongoDB)
- [ ] Build process completed successfully
- [ ] API endpoints verified
- [ ] Frontend assets optimized

---

## 1️⃣ Vercel Deployment (Recommended)

### Prerequisites
- Vercel account
- Git repository

### Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

### Configuration
The `vercel.json` file is already configured in the project root.

### Environment Variables
Set in Vercel Dashboard:
- `MONGODB_URI`
- `NODE_ENV=production`
- `JWT_SECRET` (when implemented)

---

## 2️⃣ Netlify Deployment

### Prerequisites
- Netlify account
- Git repository

### Steps

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Build Settings
- **Build Command:** `npm run build` (if applicable)
- **Publish Directory:** `src`
- **Functions Directory:** `server`

---

## 3️⃣ Heroku Deployment

### Prerequisites
- Heroku account
- Heroku CLI installed

### Steps

1. **Login to Heroku**
   ```bash
   heroku login
   ```

2. **Create Heroku App**
   ```bash
   heroku create unparalleled-scholar
   ```

3. **Add Buildpack**
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_uri
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

6. **Open App**
   ```bash
   heroku open
   ```

### Procfile
Create a `Procfile` in the root:
```
web: node server/server.js
```

---

## 4️⃣ DigitalOcean App Platform

### Steps

1. **Connect GitHub Repository**
   - Go to DigitalOcean App Platform
   - Connect your repository

2. **Configure Build**
   - **Environment:** Node.js
   - **Build Command:** `npm install`
   - **Run Command:** `node server/server.js`

3. **Set Environment Variables**
   - Add all variables from `.env.example`

4. **Deploy**
   - Click "Deploy"

---

## 5️⃣ AWS EC2 (Advanced)

### Prerequisites
- AWS account
- EC2 instance running
- SSH access

### Steps

1. **Connect to EC2**
   ```bash
   ssh -i your-key.pem ubuntu@your-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Clone Repository**
   ```bash
   git clone your-repo-url
   cd Scholar\ Site
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Install PM2**
   ```bash
   sudo npm install -g pm2
   ```

6. **Start Application**
   ```bash
   pm2 start server/server.js --name unparalleled-scholar
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx (Optional)**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/default
   ```

   Add configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   ```bash
   sudo systemctl restart nginx
   ```

---

## 🗄️ Database Deployment

### MongoDB Atlas (Recommended)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free tier

2. **Create Cluster**
   - Choose cloud provider
   - Select region
   - Create cluster

3. **Setup Database Access**
   - Add database user
   - Set password

4. **Network Access**
   - Add IP address (0.0.0.0/0 for all, or specific IPs)

5. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy connection string

6. **Update Environment Variable**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
   ```

---

## 🔒 Security Best Practices

### Before Deployment

1. **Environment Variables**
   - Never commit `.env` file
   - Use platform-specific secret management
   - Rotate secrets regularly

2. **Dependencies**
   ```bash
   npm audit
   npm audit fix
   ```

3. **CORS Configuration**
   - Update allowed origins in production
   - Restrict to your domain only

4. **Rate Limiting**
   - Implement rate limiting (future enhancement)

5. **HTTPS**
   - Ensure SSL/TLS certificate
   - Force HTTPS redirects

---

## 📊 Post-Deployment

### Monitoring

1. **Setup Logging**
   - Use platform logging tools
   - Monitor error rates

2. **Performance Monitoring**
   - Track response times
   - Monitor server resources

3. **Uptime Monitoring**
   - Use services like UptimeRobot
   - Set up alerts

### Testing

```bash
# Test health endpoint
curl https://your-domain.com/api/health

# Test API endpoints
curl https://your-domain.com/api/courses

# Load testing (optional)
npm install -g loadtest
loadtest -c 10 -n 1000 https://your-domain.com/api/health
```

---

## 🔄 CI/CD (Optional)

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install Dependencies
        run: npm install
      
      - name: Run Tests
        run: npm test
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 🆘 Troubleshooting Deployment

### Common Issues

**Issue:** Build fails
- Check Node.js version compatibility
- Verify all dependencies in `package.json`

**Issue:** Environment variables not loading
- Ensure variables are set in platform dashboard
- Check variable names match exactly

**Issue:** Database connection fails
- Verify connection string
- Check IP whitelist
- Ensure database user has correct permissions

**Issue:** 502 Bad Gateway
- Server might be down
- Check server logs
- Verify port configuration

---

## 📞 Support

If you encounter issues during deployment:
- Check platform-specific documentation
- Review server logs
- Contact support: info@unparalleledscholar.com

---

**Built by Srijan | Srijan Technologies**  
© 2024 Unparalleled Scholar. All rights reserved.
