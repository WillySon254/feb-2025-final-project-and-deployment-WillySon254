// Newsletter Subscription
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            const messageElement = document.getElementById('subscription-message');
            
            // Simulate subscription
            setTimeout(() => {
                messageElement.textContent = 'Thank you for subscribing!';
                messageElement.className = 'success-message';
                this.reset();
            }, 1000);
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formMessage = document.getElementById('form-message');
            
            // Simulate form submission
            setTimeout(() => {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.className = 'success-message';
                this.reset();
            }, 1000);
        });
    }

    // Blog Post Like Button
    const likeBtn = document.getElementById('like-btn');
    if (likeBtn) {
        let likeCount = 0;
        const likeCountElement = document.getElementById('like-count');
        
        likeBtn.addEventListener('click', function() {
            likeCount++;
            likeCountElement.textContent = likeCount;
            
            // Change button appearance temporarily
            this.style.backgroundColor = '#2ecc71';
            setTimeout(() => {
                this.style.backgroundColor = '#3498db';
            }, 300);
        });
    }

    // Blog Post Share Button
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            alert('Share this post on your favorite social media platform!');
        });
    }

    // Comment Form
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        const commentsList = document.getElementById('comments-list');
        
        // Sample comments
        const sampleComments = [
            { name: 'John Doe', text: 'Great post! Really enjoyed reading it.', date: 'May 16, 2023' },
            { name: 'Jane Smith', text: 'Looking forward to more content like this.', date: 'May 17, 2023' }
        ];
        
        // Display sample comments
        sampleComments.forEach(comment => {
            addCommentToDOM(comment);
        });
        
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('comment-name').value;
            const text = document.getElementById('comment-text').value;
            const date = new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            
            const newComment = { name, text, date };
            addCommentToDOM(newComment);
            
            // Reset form
            this.reset();
        });
        
        function addCommentToDOM(comment) {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';
            commentElement.innerHTML = `
                <div class="comment-author">${comment.name}</div>
                <div class="comment-date">${comment.date}</div>
                <div class="comment-text">${comment.text}</div>
            `;
            commentsList.prepend(commentElement);
        }
    }

    // Mobile menu toggle (for smaller screens)
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    menuToggle.style.display = 'none';
    
    const header = document.querySelector('header .container');
    if (header) {
        header.prepend(menuToggle);
        
        const nav = document.querySelector('nav');
        
        menuToggle.addEventListener('click', function() {
            nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
        });
        
        // Check screen size and adjust menu
        function checkScreenSize() {
            if (window.innerWidth <= 768) {
                menuToggle.style.display = 'block';
                nav.style.display = 'none';
            } else {
                menuToggle.style.display = 'none';
                nav.style.display = 'block';
            }
        }
        
        window.addEventListener('resize', checkScreenSize);
        checkScreenSize();
    }
});