document.addEventListener('DOMContentLoaded', function() {
    // Collapse/expand sidebar functionality
    const collapseBtn = document.querySelector('.collapse-btn');
    const body = document.body;
    
    collapseBtn.addEventListener('click', function() {
      body.classList.toggle('collapsed');
      
      // Store preference in localStorage
      const isCollapsed = body.classList.contains('collapsed');
      localStorage.setItem('sidebarCollapsed', isCollapsed);
    });
    
    // Check for saved preference
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
      body.classList.add('collapsed');
    }
  
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('material-icons')) {
          console.log(`Opening project: ${this.querySelector('h4').textContent}`);
          // Add your project opening logic here
        }
      });
    });
  
    // Star button functionality
    document.querySelectorAll('.project-actions .material-icons').forEach(icon => {
      if (icon.textContent === 'star_outline') {
        icon.addEventListener('click', function(e) {
          e.stopPropagation();
          this.textContent = this.textContent === 'star_outline' ? 'star' : 'star_outline';
          this.style.color = this.textContent === 'star' ? 'var(--accent)' : '';
        });
      }
    });
  
    // Notification bell with counter
    const notificationBell = document.querySelector('.user-info .material-icons');
    const notificationCount = document.createElement('span');
    notificationCount.className = 'notification-count';
    notificationCount.textContent = '3';
    notificationBell.parentNode.insertBefore(notificationCount, notificationBell.nextSibling);
    
    notificationBell.addEventListener('click', function() {
      notificationCount.textContent = '0';
      notificationCount.style.backgroundColor = 'transparent';
      // Show notifications dropdown in a real app
    });
  
    // Action buttons with ripple effect
    const actionButtons = document.querySelectorAll('.actions button');
    actionButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        // Ripple effect
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size/2;
        const y = e.clientY - rect.top - size/2;
        
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        
        button.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
        
        // Button action
        const action = this.textContent.toLowerCase();
        console.log(`${action} action triggered`);
      });
    });
  
    // Search functionality with debounce
    const searchInput = document.querySelector('.search-bar input');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (this.value.trim() !== '') {
          console.log(`Searching for: ${this.value}`);
        }
      }, 500);
    });
    
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        console.log(`Searching for: ${this.value}`);
      }
    });
  });