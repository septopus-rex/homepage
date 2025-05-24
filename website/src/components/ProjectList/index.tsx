import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ProjectItem = {
  title: string;
  thumb: string;
  description: ReactNode;
  github: string;
};

const List: ProjectItem[] = [
  {
    title: 'Rules Center',
    thumb: "/img/project/rule_center.png",
    description: (
      <>
        Discuss board for rules.
      </>
    ),
    github:"https://github.com/septopus-rex/rule",
  },
  {
    title: 'Septopus World',
    thumb: "/img/project/septopus_world.png",
    description: (
      <>
        Solution of Septopus World on Solana Network
      </>
    ),
    github:"https://github.com/septopus-rex/world",
  },
  {
    title: 'King Center',
    thumb: "/img/project/king_center.png",
    description: (
      <>
        King management center.
      </>
    ),
    github:"https://github.com/septopus-rex/king",
  },
  ,
  {
    title: 'AI Center',
    thumb: "/img/project/ai_center.png",
    description: (
      <>
        AI management center.
      </>
    ),
    github:"https://github.com/septopus-rex/ai",
  },
];

function Feature({title,thumb, description,github}: ProjectItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={thumb} alt="" className={styles.thumb}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <p><a href={github} target='_blank'>{github}</a></p>
      </div>
    </div>
  );
}

export default function ProjectList(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {List.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
