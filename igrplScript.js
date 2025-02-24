document.getElementById('INUP2').addEventListener('click', function() {
    document.getElementById('project-card-container-up2').classList.add('project-card-containers');
    document.getElementById('project-card-container-hr2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct2').classList.remove('project-card-containers');
})
document.getElementById('INUP2').addEventListener('click', function() {
    document.getElementById('INUP2').style.fill = '#4dff56';
    document.getElementById('INHR2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INAP2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INCT2').style.fill = 'rgba(0, 128, 0, 0.904)';
})

document.getElementById('INHR2').addEventListener('click', function() {
    document.getElementById('project-card-container-hr2').classList.add('project-card-containers');
    document.getElementById('project-card-container-up2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct2').classList.remove('project-card-containers');
})
document.getElementById('INHR2').addEventListener('click', function() {
    document.getElementById('INHR2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INAP2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INCT2').style.fill = 'rgba(0, 128, 0, 0.904)';
})

document.getElementById('INAP2').addEventListener('click', function() {
    document.getElementById('project-card-container-ap2').classList.add('project-card-containers');
    document.getElementById('project-card-container-up2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct2').classList.remove('project-card-containers');
})
document.getElementById('INAP2').addEventListener('click', function() {
    document.getElementById('INAP2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INHR2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INCT2').style.fill = 'rgba(0, 128, 0, 0.904)';
})

document.getElementById('INCT2').addEventListener('click', function() {
    document.getElementById('project-card-container-ct2').classList.add('project-card-containers');
    document.getElementById('project-card-container-up2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr2').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap2').classList.remove('project-card-containers');
})
document.getElementById('INCT2').addEventListener('click', function() {
    document.getElementById('INCT2').style.fill = '#4dff56';
    document.getElementById('INUP2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INHR2').style.fill = 'rgba(0, 128, 0, 0.904)';
    document.getElementById('INAP2').style.fill = 'rgba(0, 128, 0, 0.904)';
})

document.getElementById('INMP').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-mp').classList.add('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INMP').addEventListener('click', function() {
    document.getElementById('INMP').style.fill = '#4dff56';
    // document.getElementById('INMP').style.filter = 'drop-shadow(0 0 5px #4dff56) drop-shadow(0 0 5px #4dff56) drop-shadow(0 0 20px #4dff56)';
    document.getElementById('INUP').style.fill = ' var(--stateColor)';
    document.getElementById('INHR').style.fill = ' var(--stateColor)';
    document.getElementById('INAP').style.fill = ' var(--stateColor)';
    document.getElementById('INCT').style.fill = ' var(--stateColor)';
    document.getElementById('INRJ').style.fill = ' var(--stateColor)';
    document.getElementById('INGJ').style.fill = ' var(--stateColor)';
})

document.getElementById('INUP').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-up').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INUP').addEventListener('click', function() {
    document.getElementById('INUP').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INHR').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-hr').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INHR').addEventListener('click', function() {
    document.getElementById('INHR').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INAP').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-ap').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INAP').addEventListener('click', function() {
    document.getElementById('INAP').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INCT').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-ct').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INCT').addEventListener('click', function() {
    document.getElementById('INCT').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INRJ').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-rj').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-gj').classList.remove('project-card-containers');
})
document.getElementById('INRJ').addEventListener('click', function() {
    document.getElementById('INRJ').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
    document.getElementById('INGJ').style.fill = 'var(--stateColor)';
})

document.getElementById('INGJ').addEventListener('click', function() {
    document.getElementById('default-projects-info-right').style.display = 'none';
    document.getElementById('project-card-container-gj').classList.add('project-card-containers');
    document.getElementById('project-card-container-mp').classList.remove('project-card-containers');
    document.getElementById('project-card-container-up').classList.remove('project-card-containers');
    document.getElementById('project-card-container-hr').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ap').classList.remove('project-card-containers');
    document.getElementById('project-card-container-ct').classList.remove('project-card-containers');
    document.getElementById('project-card-container-rj').classList.remove('project-card-containers');
})
document.getElementById('INGJ').addEventListener('click', function() {
    document.getElementById('INGJ').style.fill = '#4dff56';
    document.getElementById('INMP').style.fill = 'var(--stateColor)';
    document.getElementById('INUP').style.fill = 'var(--stateColor)';
    document.getElementById('INAP').style.fill = 'var(--stateColor)';
    document.getElementById('INCT').style.fill = 'var(--stateColor)';
    document.getElementById('INRJ').style.fill = 'var(--stateColor)';
    document.getElementById('INHR').style.fill = 'var(--stateColor)';
})
