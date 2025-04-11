document.addEventListener('DOMContentLoaded', function() {
    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.addEventListener('click', function(e) {
        // Don't trigger if clicking on action buttons
        if (!e.target.classList.contains('material-icons')) {
          console.log(`Opening project: ${this.querySelector('h4').textContent}`);
          // In a real app, you would navigate to the project page
        }
      });
    });
  
    // Star button functionality
    document.querySelectorAll('.project-actions .material-icons').forEach(icon => {
      if (icon.textContent === 'star_outline') {
        icon.addEventListener('click', function(e) {
          e.stopPropagation();
          this.textContent = this.textContent === 'star_outline' ? 'star' : 'star_outline';
        });
      }
    });
  
    // Notification bell
    const notificationBell = document.querySelector('.user-info .material-icons');
    notificationBell.addEventListener('click', function() {
      console.log('Showing notifications');
      // In a real app, you would show a notifications dropdown
      alert('You have 3 new notifications');
    });
  
    // Action buttons
    const actionButtons = document.querySelectorAll('.actions button');
    actionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const action = this.textContent.toLowerCase();
        console.log(`${action} action triggered`);
        // In a real app, you would perform the appropriate action
        alert(`${action} functionality would go here`);
      });
    });
  
    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        console.log(`Searching for: ${this.value}`);
        // In a real app, you would perform the search
        alert(`Search results for: ${this.value}`);
      }
    });
  });