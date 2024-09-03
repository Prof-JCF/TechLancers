// TROCA DE SEÇÕES
function showSection(id) {
    // Oculta todas as seções
    var sections = document.querySelectorAll('.main > div[id^="content-"]');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Mostra a seção desejada
    var sectionToShow = document.getElementById(id);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }
}

// Inicialmente, exibe a primeira seção
document.addEventListener('DOMContentLoaded', function() {
    showSection('content-1'); // Altere para o ID da seção que você deseja exibir por padrão
});

function ocultar() {
    var element = document.getElementById("content-1");
    element.classList.add("content-1");
  }
  
  function mostrar() {
    var element = document.getElementById("content-1");
    element.classList.remove("content-1");
  }
//SEÇÂO GESTÂO DE CLIENTES
document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do formulário para um servidor
    alert('Cliente salvo com sucesso!');
});

document.getElementById('leadSegmentationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para segmentar leads, possivelmente envolvendo chamadas para APIs ou filtragem de dados
    alert('Leads segmentados com sucesso!');
});

document.getElementById('interactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica para registrar interações, talvez salvando informações em um banco de dados
    alert('Interação registrada com sucesso!');
});
//SEÇÂO GESTÂO DE PEDIDOS
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pedido criado com sucesso!');
});

document.getElementById('statusForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Status do pedido atualizado com sucesso!');
});

document.getElementById('catalogSearchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Busca realizada com sucesso!');
});

//SEÇÃO RELATORIOS E ANALISES

document.getElementById('salesReportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica para gerar relatórios de vendas
    alert('Relatório de vendas gerado com sucesso!');
});

document.getElementById('kpiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica para atualizar metas e KPIs
    alert('Metas e KPIs atualizados com sucesso!');
});

// Função fictícia para atualizar métricas de desempenho (substituir com lógica real)
function updatePerformanceMetrics() {
    document.getElementById('conversionRate').textContent = '12%'; // Exemplo
    document.getElementById('avgSaleValue').textContent = 'R$150,00'; // Exemplo
    document.getElementById('responseTime').textContent = '2h 15m'; // Exemplo
}

updatePerformanceMetrics();

//SEÇAO DE SUPORTE
function toggleFAQ(id) {
    const answer = document.getElementById(id);
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
}

document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implementar lógica para enviar solicitação de suporte
    alert('Sua solicitação de suporte foi enviada com sucesso!');
});