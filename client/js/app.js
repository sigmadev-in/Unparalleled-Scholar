// Unparalleled Scholar - Client App
// Initialize any interactive behaviors here

document.addEventListener('DOMContentLoaded', () => {
	// Log initialization
	console.log('🎓 Unparalleled Scholar app initialized');
	console.log('Project: US.V1');
	console.log('Built by Srijan | Srijan Technologies');

	// Mobile Menu Toggle
	const mobileMenuButton = document.getElementById('mobile-menu-button');
	const mobileMenu = document.getElementById('mobile-menu');
	
	if (mobileMenuButton && mobileMenu) {
		mobileMenuButton.addEventListener('click', () => {
			mobileMenu.classList.toggle('hidden');
			const isExpanded = mobileMenu.classList.contains('hidden') ? 'false' : 'true';
			mobileMenuButton.setAttribute('aria-expanded', isExpanded);
		});

		// Close mobile menu when clicking a link
		const mobileLinks = mobileMenu.querySelectorAll('a');
		mobileLinks.forEach(link => {
			link.addEventListener('click', () => {
				mobileMenu.classList.add('hidden');
				mobileMenuButton.setAttribute('aria-expanded', 'false');
			});
		});
	}

	// Smooth scroll for internal anchor links
	const internalLinks = document.querySelectorAll('a[href^="#"]');
	internalLinks.forEach((link) => {
		link.addEventListener('click', (e) => {
			const targetId = link.getAttribute('href')?.slice(1);
			const target = targetId ? document.getElementById(targetId) : null;
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	// Add animation on scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in-up');
			}
		});
	}, observerOptions);

	// Observe all sections
	document.querySelectorAll('section').forEach(section => {
		observer.observe(section);
	});

	// Check API health on load
	checkAPIHealth();

	// Newsletter Form Handler
	const newsletterForm = document.getElementById('newsletter-form');
	if (newsletterForm) {
		newsletterForm.addEventListener('submit', async (e) => {
			e.preventDefault();
			const emailInput = newsletterForm.querySelector('input[type="email"]');
			const email = emailInput.value.trim();
			const submitButton = newsletterForm.querySelector('button[type="submit"]');

			if (!email) return;

			// Disable button during submission
			submitButton.disabled = true;
			submitButton.style.opacity = '0.6';

			try {
				// Here you would typically send to your backend
				// For now, we'll simulate success
				await new Promise(resolve => setTimeout(resolve, 1000));
				
				// Show success message
				showNotification('✅ Successfully subscribed to newsletter!', 'success');
				emailInput.value = '';
			} catch (error) {
				showNotification('❌ Subscription failed. Please try again.', 'error');
			} finally {
				submitButton.disabled = false;
				submitButton.style.opacity = '1';
			}
		});
	}

	// FAQ Accordion
	setupFAQ();
});

// Check if API is running
async function checkAPIHealth() {
	try {
		const response = await fetch('http://localhost:3000/api/health');
		const data = await response.json();
		if (data.status === 'OK') {
			console.log('✅ API Server is running:', data);
		}
	} catch (error) {
		console.log('⚠️ API Server is not running. Start it with: npm run dev');
	}
}

// Show notification
function showNotification(message, type = 'success') {
	// Create notification element
	const notification = document.createElement('div');
	notification.className = `fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-2xl transform transition-all duration-500 ${
		type === 'success' 
			? 'bg-teal-500 text-white' 
			: 'bg-red-500 text-white'
	}`;
	notification.style.opacity = '0';
	notification.style.transform = 'translateY(-20px)';
	notification.textContent = message;
	
	document.body.appendChild(notification);
	
	// Animate in
	setTimeout(() => {
		notification.style.opacity = '1';
		notification.style.transform = 'translateY(0)';
	}, 100);
	
	// Remove after 4 seconds
	setTimeout(() => {
		notification.style.opacity = '0';
		notification.style.transform = 'translateY(-20px)';
		setTimeout(() => notification.remove(), 500);
	}, 4000);
}

// Setup FAQ Accordion
function setupFAQ() {
	const faqItems = document.querySelectorAll('.faq-item');
	
	faqItems.forEach(item => {
		const question = item.querySelector('.faq-question');
		const answer = item.querySelector('.faq-answer');
		const icon = item.querySelector('.faq-icon');
		
		if (question && answer) {
			question.addEventListener('click', () => {
				const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
				
				// Close all other items
				faqItems.forEach(otherItem => {
					const otherAnswer = otherItem.querySelector('.faq-answer');
					const otherIcon = otherItem.querySelector('.faq-icon');
					if (otherAnswer && otherAnswer !== answer) {
						otherAnswer.style.maxHeight = '0';
						if (otherIcon) {
							otherIcon.style.transform = 'rotate(0deg)';
						}
					}
				});
				
				// Toggle current item
				if (isOpen) {
					answer.style.maxHeight = '0';
					if (icon) {
						icon.style.transform = 'rotate(0deg)';
					}
				} else {
					answer.style.maxHeight = answer.scrollHeight + 'px';
					if (icon) {
						icon.style.transform = 'rotate(180deg)';
					}
				}
			});
		}
	});
}
