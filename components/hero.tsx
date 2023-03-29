/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import animation from './animated.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-mobile'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        <span 
          className={cn(
            animation['animated-gradient-text_background'], 
            animation['animated-gradient-brand_background'], 
          )}
          style={{ 
            ['--content' as any] : "'Avunek'",
            ['--padding' as any] : '0.05em',
            ['--start-color' as any] : '#007CF0',
            ['--end-color' as any] : '#00DFD8' 
            }}
          >

          <span className={cn(
              animation['animated-gradient-text_foreground'], 
              animation['animated-gradient-brand_foreground'],
            )}
            >
              {BRAND_NAME}
          </span>
        </span>

      </h1>
      <h1 className={cn(styles.title, styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        <br className={styleUtils['show-on-desktop']} />
        <span 
          className={cn(
            animation['animated-gradient-text_background'], 
            animation['animated-gradient-text_background-1'], 
          )}
          style={{ 
            ['--content' as any] : "'Zet.'",
            ['--padding' as any] : '0.05em',
            ['--start-color' as any] : '#007CF0',
            ['--end-color' as any] : '#00DFD8' 
            }}
          >

          <span className={cn(
              animation['animated-gradient-text_foreground'], 
              animation['animated-gradient-text_foreground-1'],
            )}
            >
              Zet.
          </span>
        </span>
        <span 
          className={cn(
            animation['animated-gradient-text_background'], 
            animation['animated-gradient-text_background-2'], 
          )}
          style={{ 
            ['--content' as any] : "'Jezelf.'",
            ['--padding' as any] : '0.05em',
            ['--start-color' as any] : '#7928CA',
            ['--end-color' as any] : '#FF0080' 
            }}
          >

          <span className={cn(
              animation['animated-gradient-text_foreground'], 
              animation['animated-gradient-text_foreground-2'],
            )}
            >
              Jezelf.
          </span>
        </span>
        <span 
          className={cn(
            animation['animated-gradient-text_background'], 
            animation['animated-gradient-text_background-3'], 
          )}
          style={{ 
            ['--content' as any] : "'Online.'",
            ['--padding' as any] : '0.05em',
            ['--start-color' as any] : '#FF4D4D',
            ['--end-color' as any] : '#F9CB28' 
            }}
          >

          <span className={cn(
              animation['animated-gradient-text_foreground'], 
              animation['animated-gradient-text_foreground-3'],
            )}
            >
              Online.
          </span>
        </span>
      </h1>
      <h2
        className={cn(
          styleUtils.appear,
          styleUtils['appear-third'],
          styleUtils['show-on-tablet'],
          styles.description
        )}
      >
        {SITE_DESCRIPTION}
      </h2>
      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>Wat voor bedrijf ben jij?</p>
        <div className={styles['description-separator']} />
        <div className={styles['geist-container']}>
          <span className={cn(styles['button-bg'], styles['bg-1'],)}></span>
          <span className={cn(styles['button-bg'], styles['bg-2'],)}></span>
          <span className={cn(styles['button-bg'], styles['bg-3'],)}></span>
          <a role="button" href="#" type="submit"
          className={cn(styles['gradient-button'])}
          ><span>Contact</span></a>
        </div>
      </div>
        <h2 className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles['small-description'], )}>
          Een website stelt je in staat om jezelf te presenteren op een manier die past bij jouw persoonlijkheid en waarden. Je kunt je eigen verhaal vertellen, je expertise en vaardigheden laten zien en potentiële klanten overtuigen van jouw toegevoegde waarde.
        </h2>
    </div>
  );
}
