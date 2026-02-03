import React from 'react';
import Layout from '@theme/Layout';
import { getBookById } from '../../config/books';
import styles from '../print-all.module.css';

// Front matter
import Predgovor from '@site/docs/bridge-to-light-bg/00-predgovor.mdx';
import VuvedenieReviziya from '@site/docs/bridge-to-light-bg/01-vuvedenie-reviziya.mdx';
import Predislovie from '@site/docs/bridge-to-light-bg/02-predislovie.mdx';
import Vuvedenie from '@site/docs/bridge-to-light-bg/03-vuvedenie.mdx';

// Lodge of Perfection (4-14 degrees)
import LozhaSavarshenstvo from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/00-vuvedenie.mdx';
import TaenMaystor from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/04-taen-maystor.mdx';
import SavarshenMaystor from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/05-savarshen-maystor.mdx';
import IntimenSekretar from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/06-intimen-sekretar.mdx';
import NadziratelSadiya from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/07-nadziratel-i-sadiya.mdx';
import IntendantStroitelstvo from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/08-intendant-na-stroitelstvoto.mdx';
import IzbrannikDevette from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/09-10-izbrannik-na-devette.mdx';
import IzbrannikDvanadessette from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/11-izbrannik-na-dvanadessette.mdx';
import MaystorArhitekt from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/12-maystor-arhitekt.mdx';
import KralskaArka from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/13-kralska-arka-na-solomon.mdx';
import SavarshenIzbrannik from '@site/docs/bridge-to-light-bg/lozha-na-savarshenstvoto/14-savarshen-izbrannik.mdx';

// Rose Croix Chapter (15-18 degrees)
import GlavaRozovKrast from '@site/docs/bridge-to-light-bg/glava-na-rozoviya-krast/00-vuvedenie.mdx';
import RitsarIztok from '@site/docs/bridge-to-light-bg/glava-na-rozoviya-krast/15-ritsar-na-iztoka.mdx';
import PrintsYerusalim from '@site/docs/bridge-to-light-bg/glava-na-rozoviya-krast/16-prints-na-yerusalim.mdx';
import RitsarIztokZapad from '@site/docs/bridge-to-light-bg/glava-na-rozoviya-krast/17-ritsar-na-iztoka-i-zapada.mdx';
import RitsarRozovKrast from '@site/docs/bridge-to-light-bg/glava-na-rozoviya-krast/18-ritsar-na-rozoviya-krast.mdx';

// Council of Kadosh (19-30 degrees)
import SavetKadosh from '@site/docs/bridge-to-light-bg/savet-na-kadosh/00-vuvedenie.mdx';
import VelikPontif from '@site/docs/bridge-to-light-bg/savet-na-kadosh/19-velik-pontif.mdx';
import MaystorSimvolichnataLozha from '@site/docs/bridge-to-light-bg/savet-na-kadosh/20-maystor-na-simvolichnata-lozha.mdx';
import Noahit from '@site/docs/bridge-to-light-bg/savet-na-kadosh/21-noahit.mdx';
import RitsarKralskaBradva from '@site/docs/bridge-to-light-bg/savet-na-kadosh/22-ritsar-na-kralskata-bradva.mdx';
import VozhdSkiniya from '@site/docs/bridge-to-light-bg/savet-na-kadosh/23-vozhd-na-skiniyata.mdx';
import PrintsSkiniya from '@site/docs/bridge-to-light-bg/savet-na-kadosh/24-prints-na-skiniyata.mdx';
import RitsarMednaZmiya from '@site/docs/bridge-to-light-bg/savet-na-kadosh/25-ritsar-na-mednata-zmiya.mdx';
import PrintsMilosardie from '@site/docs/bridge-to-light-bg/savet-na-kadosh/26-prints-na-milosardieto.mdx';
import RitsarSluntse from '@site/docs/bridge-to-light-bg/savet-na-kadosh/27-ritsar-na-sluntseto.mdx';
import RitsarKomandor from '@site/docs/bridge-to-light-bg/savet-na-kadosh/28-ritsar-komandor-na-hrama.mdx';
import ShotlandskiRitsar from '@site/docs/bridge-to-light-bg/savet-na-kadosh/29-shotlandski-ritsar-na-sv-andrey.mdx';
import RitsarKadosh from '@site/docs/bridge-to-light-bg/savet-na-kadosh/30-ritsar-kadosh.mdx';

// Consistory (31-32 degrees)
import Konsistoriya from '@site/docs/bridge-to-light-bg/konsistoriya/00-vuvedenie.mdx';
import InspektorInkvizitor from '@site/docs/bridge-to-light-bg/konsistoriya/31-inspektor-inkvizitor.mdx';
import MaystorKralskaTayna from '@site/docs/bridge-to-light-bg/konsistoriya/32-maystor-na-kralskata-tayna.mdx';

// Back matter
import ZaAvtora from '@site/docs/bridge-to-light-bg/99-za-avtora.mdx';
import IzbraniIztochnitsi from '@site/docs/bridge-to-light-bg/100-izbrani-iztochnitsi.mdx';

export default function PrintBridgeToLight(): JSX.Element {
  const book = getBookById('bridge-to-light');
  const handlePrint = () => window.print();

  return (
    <Layout
      title={`Print: ${book?.titleBg}`}
      description="Print the complete document"
      noFooter
    >
      <div className={styles.printContainer}>
        <div className={styles.printControls}>
          <h1>Печат на пълния документ</h1>
          <p>
            Тази страница съдържа всички глави за печат като един документ.
          </p>
          <button onClick={handlePrint} className={styles.printButton}>
            Печат (Ctrl+P)
          </button>
          <p className={styles.hint}>
            Съвет: Използвайте "Запази като PDF" в диалога за печат.
          </p>
        </div>

        <article className={styles.documentContent}>
          <section className={styles.titlePage}>
            <h1>Мост към Светлината</h1>
            <h2>A Bridge to Light</h2>
            <p className={styles.authors}>Rex R. Hutchens, 33°</p>
            <p className={styles.source}>
              Изследване на масонския ритуал и философия
              <br />
              на Стария и приет шотландски обред
            </p>
          </section>

          {/* Front matter */}
          <section className={styles.chapter}><Predgovor /></section>
          <section className={styles.chapter}><VuvedenieReviziya /></section>
          <section className={styles.chapter}><Predislovie /></section>
          <section className={styles.chapter}><Vuvedenie /></section>

          {/* Lodge of Perfection */}
          <section className={styles.chapter}><LozhaSavarshenstvo /></section>
          <section className={styles.chapter}><TaenMaystor /></section>
          <section className={styles.chapter}><SavarshenMaystor /></section>
          <section className={styles.chapter}><IntimenSekretar /></section>
          <section className={styles.chapter}><NadziratelSadiya /></section>
          <section className={styles.chapter}><IntendantStroitelstvo /></section>
          <section className={styles.chapter}><IzbrannikDevette /></section>
          <section className={styles.chapter}><IzbrannikDvanadessette /></section>
          <section className={styles.chapter}><MaystorArhitekt /></section>
          <section className={styles.chapter}><KralskaArka /></section>
          <section className={styles.chapter}><SavarshenIzbrannik /></section>

          {/* Rose Croix Chapter */}
          <section className={styles.chapter}><GlavaRozovKrast /></section>
          <section className={styles.chapter}><RitsarIztok /></section>
          <section className={styles.chapter}><PrintsYerusalim /></section>
          <section className={styles.chapter}><RitsarIztokZapad /></section>
          <section className={styles.chapter}><RitsarRozovKrast /></section>

          {/* Council of Kadosh */}
          <section className={styles.chapter}><SavetKadosh /></section>
          <section className={styles.chapter}><VelikPontif /></section>
          <section className={styles.chapter}><MaystorSimvolichnataLozha /></section>
          <section className={styles.chapter}><Noahit /></section>
          <section className={styles.chapter}><RitsarKralskaBradva /></section>
          <section className={styles.chapter}><VozhdSkiniya /></section>
          <section className={styles.chapter}><PrintsSkiniya /></section>
          <section className={styles.chapter}><RitsarMednaZmiya /></section>
          <section className={styles.chapter}><PrintsMilosardie /></section>
          <section className={styles.chapter}><RitsarSluntse /></section>
          <section className={styles.chapter}><RitsarKomandor /></section>
          <section className={styles.chapter}><ShotlandskiRitsar /></section>
          <section className={styles.chapter}><RitsarKadosh /></section>

          {/* Consistory */}
          <section className={styles.chapter}><Konsistoriya /></section>
          <section className={styles.chapter}><InspektorInkvizitor /></section>
          <section className={styles.chapter}><MaystorKralskaTayna /></section>

          {/* Back matter */}
          <section className={styles.chapter}><ZaAvtora /></section>
          <section className={styles.chapter}><IzbraniIztochnitsi /></section>
        </article>
      </div>
    </Layout>
  );
}
