export async function LeftBarApi() {
  return [
    {
      id: 1,
      title: 'Chamado',
      options: [
        {
          id: 1,
          icon: 'AiOutlineFileText',
          option: 'Ordens de Serviços',
        },
        {
          id: 2,
          icon: 'AiOutlineFileAdd',
          option: 'Nova Ordem de Serviço',
        },
        {
          id: 3,
          icon: 'AiOutlineCoffee',
          option: 'Sugerir Desenvolvimento',
        },
      ],
    },
    {
      id: 2,
      title: 'Ajuda',
      options: [
        {
          id: 4,
          icon: 'AiOutlineComment',
          option: 'Perguntas Frequentes',
        },
        {
          id: 5,
          icon: 'AiOutlineInbox',
          option: 'Central de Ajuda',
        },
      ],
    },
    {
      id: 3,
      title: 'Analytics',
      options: [
        {
          id: 6,
          icon: 'AiOutlineRise',
          option: 'Indicadores',
        },
      ],
    },
  ]
}

export async function ProfileApi() {
  return [
    {
      id: 1,
      userName: 'Luís Lenzi',
      userFunction: 'Desenvolvedor',
      userEmail: 'luis.lenzi@devlean.com.br',
      userImage: '/assets/png/logo192.png',
    },
  ]
}
