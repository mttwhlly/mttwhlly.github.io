import React from 'react';

interface Client {
  id: number;
  name: string;
  logo: string;
  alt: string;
  url?: string;
}

const SelectedClients: React.FC = () => {
  const clients: Client[] = [
    {
      id: 1,
      name: 'Adobe',
      logo: '/images/adobe-logo.png',
      alt: 'Adobe logo',
      url: 'https://adobe.com',
    },
    {
      id: 2,
      name: 'CAQH',
      logo: '/images/caqh-logo.png',
      alt: 'CAQH logo',
      url: 'https://caqh.org',
    },
    {
      id: 3,
      name: 'Monotype',
      logo: '/images/monotype.webp',
      alt: 'Monotype logo',
      url: 'https://monotype.com',
    },
    {
      id: 4,
      name: 'Wells Coffee Co.',
      logo: '/images/wells-coffee.webp',
      alt: 'Wells Coffee Co. logo',
      url: 'https://wellscoffees.com',
    },
    {
      id: 5,
      name: 'Broward County Library',
      logo: '/images/bcl.png',
      alt: 'Broward County Library logo',
      url: 'https://broward.org/library',
    },
    {
      id: 6,
      name: 'Calvary Christian Academy',
      logo: '/images/cca.png',
      alt: 'Calvary Christian Academy logo',
      url: 'https://ccaeagles.org',
    },

    // Add more clients as needed
  ];

  return (
    <section className="container px-4 lg:px-0 pt-12 pb-2 max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-lg font-mono tracking-loose leading-tight uppercase text-gray-500 px-4">
          Selected Clients
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {clients.map((client) => (
          <ClientLogo key={client.id} client={client} />
        ))}
      </div>

      {/* Mobile Horizontal Scroll */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex gap-8 pb-4 px-2" style={{ width: 'max-content' }}>
          {clients.map((client) => (
            <div key={client.id} className="flex-shrink-0">
              <ClientLogo client={client} />
            </div>
          ))}
        </div>
        {/* Scroll indicator */}
        {/* <div className="flex justify-center mt-4">
          <div className="w-12 h-1 bg-gray-200 rounded-full">
            <div className="w-4 h-1 bg-gray-400 rounded-full animate-pulse"></div>
          </div>
        </div> */}
      </div>

      <p className="mt-6 px-4 text-gray-600 leading-relaxed max-w-4xl mx-auto">
        I've had the privilege of working with organizations ranging from healthcare innovators to
        local businesses, always focusing on thoughtful solutions that serve real user needs.
      </p>
    </section>
  );
};

interface ClientLogoProps {
  client: Client;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client }) => {
  const logoElement = (
    <div className="group relative">
      <img
        src={client.logo}
        alt={client.alt}
        className="h-12 w-auto max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out filter group-hover:brightness-100"
        loading="lazy"
      />
      {/* Optional: Add client name on hover */}
      {/* <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xs text-gray-500 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
          {client.name}
        </span>
      </div> */}
    </div>
  );

  if (client.url) {
    return (
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform duration-300"
        title={client.name}
      >
        {logoElement}
      </a>
    );
  }

  return logoElement;
};

export default SelectedClients;
