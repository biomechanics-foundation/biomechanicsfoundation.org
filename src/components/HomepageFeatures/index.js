import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software',
    Svg: require('@site/static/img/media.svg').default,
    description: (
      <>
        Developing forward-thinking software to advance biomechanics research.
      </>
    ),
  },
  {
    title: 'Education',
    Svg: require('@site/static/img/education.svg').default,
    description: (
      <>
        Providing educational resources to help the biomechanics community learn and grow.
      </>
    ),
  },
  {
    title: 'Outreach',
    Svg: require('@site/static/img/charity.svg').default,
    description: (
      <>
        Engaging with the biomechanics community and beyond to foster collaboration and innovation.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
