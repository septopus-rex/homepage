import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type ProjectItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
  github: string;
};

const FeatureList: ProjectItem[] = [
  {
    title: 'Rules Center',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discuss board for rules.
      </>
    ),
    github:"https://github.com/septopus-rex/rule",
  },
  {
    title: 'Septopus World',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Solution of Septopus World on Solana Network
      </>
    ),
    github:"https://github.com/septopus-rex/world",
  },
  {
    title: 'King Center',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        AI management center.
      </>
    ),
    github:"https://github.com/septopus-rex/ai",
  },
];

function Feature({title, Svg, description,github}: ProjectItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
