document.addEventListener('DOMContentLoaded', () => {
    // Donation Modal
    const donateBtn = document.querySelector('.donate-btn');
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Make a Donation</h2>
        <form id="donation-form">
          <label for="amount">Donation Amount (GHC)</label>
          <input type="number" id="amount" name="amount" min="1" required>
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required>
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required>
          <button type="submit">Donate Now</button>
        </form>
      </div>
    `;
    document.body.appendChild(modal);
  
    donateBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    const closeModal = modal.querySelector('.close');
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    modal.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.style.display = 'none';
      }
    });
  
    const donationForm = modal.querySelector('#donation-form');
    donationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your donation to HERA Foundation!');
      modal.style.display = 'none';
    });
  
    // Campaign Details Modals
    const campaigns = [
      {
        title: 'Clean Water for All',
        description: 'Help bring life-saving water to communities in need. Every GHC 1 provides clean water for one person for a year.',
        image: 'https://c.animaapp.com/m968obd2vUFb6Z/img/img-1.png'
      },
      {
        title: 'Improve Education',
        description: 'Empower minds and transform lives through education. Your support helps children access quality learning.',
        image: 'https://c.animaapp.com/m968obd2vUFb6Z/img/img-2.png'
      },
      {
        title: 'End Menstruation Stigma',
        description: 'Break the silence and shame surrounding menstruation. Support dignity and education for girls.',
        image: 'https://c.animaapp.com/m968obd2vUFb6Z/img/img-3.png'
      }
    ];
  
    const viewDetailsBtns = document.querySelectorAll('.view-details');
    viewDetailsBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        const campaign = campaigns[index];
        const campaignModal = document.createElement('div');
        campaignModal.classList.add('modal');
        campaignModal.innerHTML = `
          <div class="modal-content">
            <span class="close">&times;</span>
            <h2>${campaign.title}</h2>
            <img src="${campaign.image}" alt="${campaign.title}">
            <p>${campaign.description}</p>
          </div>
        `;
        document.body.appendChild(campaignModal);
        campaignModal.style.display = 'block';
  
        const closeCampaignModal = campaignModal.querySelector('.close');
        closeCampaignModal.addEventListener('click', () => {
          campaignModal.style.display = 'none';
          document.body.removeChild(campaignModal);
        });
  
        campaignModal.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            campaignModal.style.display = 'none';
            document.body.removeChild(campaignModal);
          }
        });
      });
    });
  
    // Gallery Lightbox
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach((img) => {
      img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const imgUrl = img.style.backgroundImage.slice(5, -2);
        lightbox.innerHTML = `
          <span class="close">&times;</span>
          <img src="${imgUrl}" alt="Gallery image">
        `;
        document.body.appendChild(lightbox);
        lightbox.style.display = 'block';
  
        const closeLightbox = lightbox.querySelector('.close');
        closeLightbox.addEventListener('click', () => {
          lightbox.style.display = 'none';
          document.body.removeChild(lightbox);
        });
  
        lightbox.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            lightbox.style.display = 'none';
            document.body.removeChild(lightbox);
          }
        });
      });
    });
  
    // Statistics Animation
    const donationStat = document.querySelector('.stat h2');
    const peopleHelpedStat = document.querySelectorAll('.stat h2')[1];
  
    function animateCount(element, target, duration) {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(start).toLocaleString();
      }, 16);
    }
  
    const donationTarget = 1284528;
    const peopleHelpedTarget = 12460;
    const animationDuration = 2000;
  
    animateCount(donationStat, donationTarget, animationDuration);
    animateCount(peopleHelpedStat, peopleHelpedTarget, animationDuration);
  
    // Play Button for Video
    const playBtn = document.querySelector('.play-btn');
    playBtn.addEventListener('click', () => {
      window.open('https://www.youtube.com/watch?v=your-video-id', '_blank');
    });
  
    // Smooth Scrolling for About Us Link
    const aboutLink = document.querySelector('.nav-links a[href="#about"]');
    if (aboutLink) {
      aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
      });
    }
  });