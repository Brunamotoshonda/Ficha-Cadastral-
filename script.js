document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const dataExp = document.getElementById('data-exp').value;
    const estadoCivil = document.getElementById('estado-civil').value;
    const conjuge = document.getElementById('c_conjuge').value;
    const cpfConjuge = document.getElementById('cpf_conjuge').value;
    const dataNascConjuge = document.getElementById('data-nasc_conjuge').value;
    const endereco = document.getElementById('endereco').files.length > 0 ? 'Arquivo enviado' : 'Não enviado';
    const telefone1 = document.getElementById('telefone1').value;
    const telefone2 = document.getElementById('telefone2').value;
    const empresa = document.getElementById('empresa').value;
    const cargo = document.getElementById('cargo').value;
    const enderecoTrabalho = document.getElementById('endereco-trabalho').value;
    const telefoneTrabalho = document.getElementById('telefone-trabalho').value;
    const renda = document.getElementById('renda').value;
    const dataAdmissao = document.getElementById('data-admissao').value;
    const email = document.getElementById('email').value;
    const infoAutonomo = document.getElementById('info-autonomo').value;

    // Formata a mensagem para enviar via WhatsApp
    const message = `Olá! Seguem as informações preenchidas:\n\n` +
                    `CPF: ${cpf}\n` +
                    `RG/Órgão Expedidor: ${rg}\n` +
                    `Data de Expedição: ${dataExp}\n` +
                    `Estado Civil: ${estadoCivil}\n` +
                    `Cônjuge: ${conjuge}\n` +
                    `CPF do Cônjuge: ${cpfConjuge}\n` +
                    `Data de Nascimento do Cônjuge: ${dataNascConjuge}\n` +
                    `Endereço Residencial: ${endereco}\n` +
                    `Telefone para Referência 1: ${telefone1}\n` +
                    `Telefone para Referência 2: ${telefone2}\n` +
                    `Nome da Empresa: ${empresa}\n` +
                    `Cargo: ${cargo}\n` +
                    `Endereço de Trabalho: ${enderecoTrabalho}\n` +
                    `Telefone do Trabalho: ${telefoneTrabalho}\n` +
                    `Renda Salarial: ${renda}\n` +
                    `Data de Admissão: ${dataAdmissao}\n` +
                    `E-mail: ${email}\n` +
                    `Autônomo: ${infoAutonomo}\n`;

    // Codifica a mensagem para o URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link para abrir o WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/556294982654?text=${encodedMessage}`;

    // Redireciona para o WhatsApp
    window.location.href = whatsappLink;
});
