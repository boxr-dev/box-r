import styles from './InteriorChabakoSize.module.scss'
import { BottonLink } from '@/components/commons/Link/BottonLink'
import { PageTitle } from '@/components/commons/PageTitle'

interface SizeData {
  boxType: string
  boxSize: string
  mainFabric: string
  lidFabric: string
  innerRail: string
  outerRail: string
  bottomPatch: string
  rope: string
  tape: string
}

const sizeData: SizeData[] = [
  {
    boxType: '1K',
    boxSize: '24×17×16',
    mainFabric: '80×18',
    lidFabric: '43×36×8',
    innerRail: '80×8',
    outerRail: '85×7',
    bottomPatch: '21×14',
    rope: '100',
    tape: '170',
  },
  {
    boxType: '1KS',
    boxSize: '24×17×12',
    mainFabric: '80×15',
    lidFabric: '43×36×8',
    innerRail: '80×8',
    outerRail: '85×7',
    bottomPatch: '21×14',
    rope: '100',
    tape: '170',
  },
  {
    boxType: '5K',
    boxSize: '34×24×25',
    mainFabric: '120×29',
    lidFabric: '58×42×10',
    innerRail: '120×10',
    outerRail: '128×10',
    bottomPatch: '31×24',
    rope: '140',
    tape: '240',
  },
  {
    boxType: '5KS',
    boxSize: '34×24×21',
    mainFabric: '120×26',
    lidFabric: '58×42×10',
    innerRail: '120×10',
    outerRail: '128×10',
    bottomPatch: '31×24',
    rope: '140',
    tape: '240',
  },
  {
    boxType: '10K',
    boxSize: '43×29×31',
    mainFabric: '148×32',
    lidFabric: '68×54×14',
    innerRail: '148×12',
    outerRail: '151×10',
    bottomPatch: '40×29',
    rope: '150',
    tape: '270',
  },
  {
    boxType: '10KS',
    boxSize: '43×29×21',
    mainFabric: '148×24',
    lidFabric: '68×54×14',
    innerRail: '148×12',
    outerRail: '151×10',
    bottomPatch: '40×29',
    rope: '150',
    tape: '270',
  },
  {
    boxType: '15K',
    boxSize: '47×34×31',
    mainFabric: '163×32',
    lidFabric: '73×59×15',
    innerRail: '160×12',
    outerRail: '170×11',
    bottomPatch: '44×31',
    rope: '170',
    tape: '310',
  },
  {
    boxType: '15KS',
    boxSize: '47×34×21',
    mainFabric: '163×24',
    lidFabric: '73×59×15',
    innerRail: '160×12',
    outerRail: '170×11',
    bottomPatch: '44×31',
    rope: '170',
    tape: '310',
  },
  {
    boxType: '20K',
    boxSize: '52×36×40',
    mainFabric: '176×43',
    lidFabric: '80×64×12',
    innerRail: '176×12',
    outerRail: '186×11',
    bottomPatch: '49×33',
    rope: '190',
    tape: '350',
  },
  {
    boxType: '20KS',
    boxSize: '52×36×22',
    mainFabric: '176×26',
    lidFabric: '80×64×12',
    innerRail: '176×12',
    outerRail: '186×11',
    bottomPatch: '49×33',
    rope: '190',
    tape: '350',
  },
  {
    boxType: '30K',
    boxSize: '59×40×47',
    mainFabric: '202×55',
    lidFabric: '88×67×16',
    innerRail: '202×13',
    outerRail: '208×12',
    bottomPatch: '57×37',
    rope: '200',
    tape: '380',
  },
  {
    boxType: '30KS',
    boxSize: '59×40×25',
    mainFabric: '202×27',
    lidFabric: '88×67×16',
    innerRail: '202×13',
    outerRail: '208×12',
    bottomPatch: '57×37',
    rope: '200',
    tape: '380',
  },
  {
    boxType: '40K',
    boxSize: '68×43×49',
    mainFabric: '224×56',
    lidFabric: '95×72×16',
    innerRail: '224×14',
    outerRail: '232×12',
    bottomPatch: '65×40',
    rope: '230',
    tape: '440',
  },
  {
    boxType: '40KS',
    boxSize: '68×43×29',
    mainFabric: '224×40',
    lidFabric: '95×72×16',
    innerRail: '224×14',
    outerRail: '232×12',
    bottomPatch: '65×40',
    rope: '230',
    tape: '440',
  },
  {
    boxType: '60K',
    boxSize: '91×46×52',
    mainFabric: '274×63',
    lidFabric: '120×75×17',
    innerRail: '274×15',
    outerRail: '284×13',
    bottomPatch: '87×43',
    rope: '290',
    tape: '550',
  },
  {
    boxType: '60KS',
    boxSize: '91×46×31',
    mainFabric: '274×45',
    lidFabric: '120×75×17',
    innerRail: '274×15',
    outerRail: '284×13',
    bottomPatch: '87×43',
    rope: '290',
    tape: '550',
  },
  {
    boxType: 'Nori(s)',
    boxSize: '27×24×19',
    mainFabric: '103×15',
    lidFabric: '46×43×9',
    innerRail: '103×9',
    outerRail: '110×7',
    bottomPatch: '25×21',
    rope: '120',
    tape: '230',
  },
  {
    boxType: 'Nori(m)',
    boxSize: '27×24×17',
    mainFabric: '103×15',
    lidFabric: '46×43×9',
    innerRail: '103×9',
    outerRail: '110×7',
    bottomPatch: '25×21',
    rope: '120',
    tape: '230',
  },
  {
    boxType: 'Stool',
    boxSize: '32×32×40',
    mainFabric: '131×45',
    lidFabric: '56×56×12',
    innerRail: '131×12',
    outerRail: '138×11',
    bottomPatch: '30×30',
    rope: '140',
    tape: '250',
  },
]

export default function InteriorChabakoSize() {
  return (
    <div className={styles.container}>
      <PageTitle title='茶箱サイズ' subTitle='インテリア茶箱 サイズ一覧' />
      <div className={styles.notes}>
        <p>※ クッションが入るため出来上がりの高さは4cmほど高くなります。</p>
        <p>※「K」はKgの意味で茶葉がそのキロ数入る箱の意味です。（5K＝5kgの茶葉が入る箱）</p>
        <p>※「S」は平箱で背の低いタイプです。</p>
        <p className={styles['date-note']}>2015年10月現在</p>
      </div>

      <div className={styles['table-wrapper']}>
        <table className={styles['size-table']}>
          <thead>
            <tr>
              <th>箱種類</th>
              <th>
                箱サイズ
                <br />
                (WxDxH)
              </th>
              <th>
                本体用
                <br />
                布サイズ
              </th>
              <th>
                蓋用
                <br />
                布サイズ
              </th>
              <th>
                内レール用
                <br />
                布サイズ
              </th>
              <th>
                外レール用
                <br />
                布サイズ
              </th>
              <th>
                底パッチ用
                <br />
                布サイズ
              </th>
              <th>ロープ</th>
              <th>テープ</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map((item, index) => (
              <tr key={index}>
                <td className={styles['box-type']}>{item.boxType}</td>
                <td>{item.boxSize}</td>
                <td>{item.mainFabric}</td>
                <td>{item.lidFabric}</td>
                <td>{item.innerRail}</td>
                <td>{item.outerRail}</td>
                <td>{item.bottomPatch}</td>
                <td>{item.rope}</td>
                <td>{item.tape}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles['button-container']}>
        <BottonLink href={'/lesson/interior-chabako/one-shot'} variant='outlined'>
          レッスン詳細に戻る
        </BottonLink>
      </div>
    </div>
  )
}
