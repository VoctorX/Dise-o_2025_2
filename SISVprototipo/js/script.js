
// Initialize data storage
let incidents = JSON.parse(localStorage.getItem('sisv_incidents')) || [];
let map, markerMode = false, tempMarker = null, currentUser = '';

// Login handling
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    currentUser = username;
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    document.getElementById('userDisplay').textContent = `Usuario: ${username}`;
    initMap();
    updateReports();
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
    document.getElementById('mainApp').classList.add('hidden');
    document.getElementById('loginScreen').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

// Sidebar toggle
document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('sidebar-hidden');
});

// Initialize map
function initMap() {
    map = L.map('map').setView([6.2476, -75.5658], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Load existing incidents
    incidents.forEach(incident => addMarkerToMap(incident));

    // Click handler for adding markers
    map.on('click', (e) => {
        if (markerMode) {
            const coords = `${e.latlng.lat.toFixed(6)}, ${e.latlng.lng.toFixed(6)}`;
            document.getElementById('incidentCoords').value = coords;
            document.getElementById('incidentCoords').dataset.lat = e.latlng.lat;
            document.getElementById('incidentCoords').dataset.lng = e.latlng.lng;
            
            if (tempMarker) map.removeLayer(tempMarker);
            tempMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
        }
    });
}

// Add marker to map
function addMarkerToMap(incident) {
    const marker = L.marker([incident.lat, incident.lng]).addTo(map);
    marker.bindPopup(`
        <div class="p-2">
            <h3 class="font-bold text-blue-600">${incident.type}</h3>
            <p class="text-sm">${incident.description}</p>
            <p class="text-xs text-gray-500">ID: ${incident.id}</p>
            <p class="text-xs text-gray-500">${incident.date}</p>
        </div>
    `);
}

// Views
function showMap() {
    document.getElementById('mapView').classList.remove('hidden');
    document.getElementById('reportsView').classList.add('hidden');
    setTimeout(() => map.invalidateSize(), 100);
}

function showReports() {
    document.getElementById('mapView').classList.add('hidden');
    document.getElementById('reportsView').classList.remove('hidden');
    updateReports();
}

function showNewIncident() {
    document.getElementById('incidentModal').classList.remove('hidden');
    markerMode = true;
    document.getElementById('markerBtn').textContent = '📍 Modo Activo';
    document.getElementById('markerBtn').classList.add('bg-yellow-500');
}

function closeModal() {
    document.getElementById('incidentModal').classList.add('hidden');
    document.getElementById('incidentForm').reset();
    markerMode = false;
    if (tempMarker) map.removeLayer(tempMarker);
    document.getElementById('markerBtn').textContent = '📍 Poner Ping';
    document.getElementById('markerBtn').classList.remove('bg-yellow-500');
}

// Map controls
function zoomIn() { map.zoomIn(); }
function zoomOut() { map.zoomOut(); }
function toggleMarkerMode() {
    markerMode = !markerMode;
    if (markerMode) {
        showNewIncident();
    } else {
        closeModal();
    }
}

// Save incident
document.getElementById('incidentForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const incident = {
        id: 'INC-' + Date.now(),
        type: document.getElementById('incidentType').value,
        description: document.getElementById('incidentDescription').value,
        lat: parseFloat(document.getElementById('incidentCoords').dataset.lat),
        lng: parseFloat(document.getElementById('incidentCoords').dataset.lng),
        coords: document.getElementById('incidentCoords').value,
        date: new Date().toLocaleString('es-CO'),
        user: currentUser
    };

    incidents.push(incident);
    localStorage.setItem('sisv_incidents', JSON.stringify(incidents));
    addMarkerToMap(incident);
    closeModal();
    alert('Incidente registrado exitosamente');
    updateReports();
});

// Update reports
function updateReports() {
    const tbody = document.getElementById('incidentsTable');
    tbody.innerHTML = '';
    
    incidents.forEach(incident => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 cursor-pointer';
        row.onclick = () => {
            showMap();
            map.setView([incident.lat, incident.lng], 15);
        };
        row.innerHTML = `
            <td class="p-3">${incident.id}</td>
            <td class="p-3">${incident.type}</td>
            <td class="p-3">${incident.date}</td>
            <td class="p-3">${incident.coords}</td>
            <td class="p-3">
                <button onclick="deleteIncident('${incident.id}'); event.stopPropagation();" class="text-red-600 hover:text-red-800">
                    Eliminar
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });

    // Update statistics
    document.getElementById('totalIncidents').textContent = incidents.length;
    
    const today = new Date().toLocaleDateString('es-CO');
    const todayCount = incidents.filter(i => i.date.includes(today)).length;
    document.getElementById('todayIncidents').textContent = todayCount;
    
    const currentMonth = new Date().getMonth();
    const monthCount = incidents.filter(i => new Date(i.date).getMonth() === currentMonth).length;
    document.getElementById('monthIncidents').textContent = monthCount;
}

// Search incident
function searchIncident() {
    const searchId = document.getElementById('searchId').value;
    const incident = incidents.find(i => i.id === searchId);
    if (incident) {
        showMap();
        map.setView([incident.lat, incident.lng], 15);
        alert(`Incidente encontrado: ${incident.type}`);
    } else {
        alert('Incidente no encontrado');
    }
}

// Delete incident
function deleteIncident(id) {
    if (confirm('¿Está seguro de eliminar este incidente?')) {
        incidents = incidents.filter(i => i.id !== id);
        localStorage.setItem('sisv_incidents', JSON.stringify(incidents));
        updateReports();
        location.reload(); // Reload to update map markers
    }
}

// Export functions (simulated)
function exportPDF() {
    alert('Generando reporte PDF... (Funcionalidad simulada)');
}

function exportExcel() {
    alert('Generando reporte Excel... (Funcionalidad simulada)');
}
