# Deployment Guide

This guide covers how to deploy your portfolio website to various hosting platforms.

## 🚀 Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**: First, push your code to a GitHub repository
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect it's a Next.js project
3. **Deploy**: Click "Deploy" - your site will be live in minutes!

### Vercel Benefits:

- ✅ Zero configuration
- ✅ Automatic deployments on git push
- ✅ Built-in analytics
- ✅ Custom domains
- ✅ Edge functions support

## 🌐 Deploy to Netlify

1. **Push to GitHub**: Push your code to a GitHub repository
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/Login with your GitHub account
   - Click "New site from Git"
   - Choose your repository
3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Deploy**: Click "Deploy site"

## 🐳 Deploy with Docker

1. **Create Dockerfile**:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and Run**:

```bash
docker build -t portfolio-site .
docker run -p 3000:3000 portfolio-site
```

## 📦 Manual Deployment

### Prerequisites:

- Node.js 18+ installed on your server
- A web server (nginx, Apache, etc.)

### Steps:

1. **Build the project**:

```bash
npm run build
```

2. **Start the production server**:

```bash
npm start
```

3. **Configure your web server** to proxy requests to `localhost:3000`

## 🔧 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set these in your hosting platform's environment variables section.

## 📊 Performance Optimization

### Before Deployment:

1. **Run Lighthouse**: Test your site's performance
2. **Optimize Images**: Use Next.js Image component
3. **Enable Compression**: Most hosting platforms do this automatically
4. **Set up Analytics**: Consider adding Google Analytics or Vercel Analytics

### Post-Deployment:

1. **Monitor Performance**: Use your hosting platform's analytics
2. **Set up Monitoring**: Configure error tracking (Sentry, etc.)
3. **SEO Check**: Verify meta tags and structured data

## 🔒 Security Considerations

1. **HTTPS**: Ensure your hosting platform provides SSL certificates
2. **Environment Variables**: Never commit sensitive data to your repository
3. **Dependencies**: Regularly update dependencies for security patches
4. **Content Security Policy**: Consider implementing CSP headers

## 📱 Mobile Optimization

1. **Test Responsiveness**: Ensure your site works on all devices
2. **Touch Targets**: Make sure buttons are large enough for mobile
3. **Loading Speed**: Optimize for slower mobile connections

## 🎯 Custom Domain Setup

### Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify:

1. Go to your site settings
2. Click "Domain management"
3. Add your custom domain
4. Update your DNS records as instructed

## 📈 Analytics Setup

### Google Analytics:

1. Create a Google Analytics account
2. Add the tracking code to your `layout.tsx`
3. Set up goals and conversions

### Vercel Analytics:

1. Enable in your Vercel project settings
2. No additional code required

## 🔄 Continuous Deployment

Your site will automatically update when you push changes to your main branch. To set up:

1. **Development Workflow**:

   - Create feature branches for new work
   - Test locally with `npm run dev`
   - Push to GitHub
   - Create pull requests for review

2. **Production Deployment**:
   - Merge to main branch
   - Automatic deployment triggers
   - Verify changes on live site

## 🆘 Troubleshooting

### Common Issues:

**Build Fails**:

- Check for TypeScript errors: `npm run type-check`
- Verify all dependencies are installed: `npm install`
- Check for linting errors: `npm run lint`

**Site Not Loading**:

- Verify environment variables are set
- Check server logs
- Ensure port 3000 is accessible

**Performance Issues**:

- Run `npm run analyze` to check bundle size
- Optimize images and assets
- Consider code splitting for large components

## 📞 Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review your hosting platform's documentation
3. Check the project's GitHub issues
4. Consider reaching out to the community

---

Happy deploying! 🚀
