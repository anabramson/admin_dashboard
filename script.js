document.addEventListener('DOMContentLoaded', function() {
  // Collapse/expand sidebar functionality
  const collapseBtn = document.querySelector('.collapse-btn');
  const dashboard = document.querySelector('.dashboard-container');
  
  collapseBtn.addEventListener('click', function() {
    dashboard.classList.toggle('collapsed');
    
    // Store preference in localStorage
    const isCollapsed = dashboard.classList.contains('collapsed');
    localStorage.setItem('sidebarCollapsed', isCollapsed);
  });
  
  // Check for saved preference
  if (localStorage.getItem('sidebarCollapsed') === 'true') {
    dashboard.classList.add('collapsed');
  }

  // Project card interactions
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if (!e.target.classList.contains('material-icons')) {
        console.log(`Opening project: ${this.querySelector('h4').textContent}`);
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
  });

  // Action buttons
  const actionButtons = document.querySelectorAll('.actions button');
  actionButtons.forEach(button => {
    button.addEventListener('click', function() {
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