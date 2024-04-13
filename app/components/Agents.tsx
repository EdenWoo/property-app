import React, { FC } from 'react';
import { Listing, Media } from '@/models/property';
import { Carousel } from 'primereact/carousel';
import { Agent } from '@/models/agency';

export interface AgentProps {
  className?: string;
  agents: Agent[];
  numVisible: number;
}

const Agents: FC<AgentProps> = ({ agents, numVisible }) => {
  const responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (agent: Agent) => {
    return (
      <div className=''>
        <div className=''>
          <img src={agent.photo} alt={''} className='h-14 object-cover' />
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={agents}
      numScroll={1}
      numVisible={numVisible || 5}
      showNavigators={true}
      showIndicators={false}
      itemTemplate={itemTemplate}
    />
  );
};

export default Agents;
