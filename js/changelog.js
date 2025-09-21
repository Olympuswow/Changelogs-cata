fetch('commits.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('changelog');
    data.reverse().forEach(commit => { // Mostrar del más reciente al más antiguo
      const commitDiv = document.createElement('div');
      commitDiv.className = 'commit';
      
      const msg = document.createElement('div');
      msg.innerHTML = `<strong>${commit.message}</strong> — ${commit.author} (${commit.date})`;
      
      const toggle = document.createElement('div');
      toggle.className = 'toggle';
      toggle.textContent = 'Mostrar archivos';
      
      const filesDiv = document.createElement('div');
      filesDiv.className = 'files';
      filesDiv.style.display = 'none';
      filesDiv.innerHTML = commit.files.map(f => `<div>${f}</div>`).join('');

      toggle.onclick = () => {
        filesDiv.style.display = filesDiv.style.display === 'none' ? 'block' : 'none';
      };

      commitDiv.appendChild(msg);
      commitDiv.appendChild(toggle);
      commitDiv.appendChild(filesDiv);
      container.appendChild(commitDiv);
    });
  })
  .catch(err => console.error('Error cargando commits.json:', err));
