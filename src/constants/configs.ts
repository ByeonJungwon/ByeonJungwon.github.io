import EducationItem from '../types/EducationItem';
import ExperienceItem from '../types/ExperienceItem';
import ProjectItem from '../types/ProjectItem';
import ArticleItem from '../types/ArticleItem';
import WebzineItem from '../types/WebzineItem';
import ReportItem from '../types/ReportItem';
import HanyangUnivLogo from '../assets/HanyangUniv.png';
import UtrehtUnivLogo from '../assets/UtrehtUniv.png';
import CI_KoFONS from '../assets/CI_KoFONS.png';
import CI_KRT from '../assets/CI_KRT.jpg';
import Article1 from '../assets/Article_1.jpg';
import Article2 from '../assets/Article_2.jpg';
import Article3 from '../assets/Article_3.jpg';
import Article4 from '../assets/Article_4.jpg';
import Article5 from '../assets/Article_5.jpg';
import Article6 from '../assets/Article_6.jpg';
import Article7 from '../assets/Article_7.jpg';
import Article8 from '../assets/Article_8.png';
import Webzine1 from '../assets/Webzine_1.jpg';
import Webzine2 from '../assets/Webzine_2.jpg';
import Webzine3 from '../assets/Webzine_3.jpg';
import Webzine4 from '../assets/Webzine_4.jpg';
import Webzine1Content from '../assets/Webzine_1_Content.png';
import Webzine2Content from '../assets/Webzine_2_Content.png';
import Webzine3Content from '../assets/Webzine_3_Content.png';
import Webzine4Content from '../assets/Webzine_4_Content.png';
import BrandedContent1 from '../assets/BrandedContents_1.png';
import BrandedContent2 from '../assets/BrandedContents_2.png';
import BrandedContent3 from '../assets/BrandedContents_3.png';
import BrandedContent4 from '../assets/BrandedContents_4.png';
import Report1 from '../assets/Report_1.png';
import Report2 from '../assets/Report_2.png';

type Configs = {
  name: string;
  descriptions: string[];
  about: string[];
  education: EducationItem[];
  experience: ExperienceItem[];
  project: ProjectItem[];
  article: ArticleItem[];
  webzine: WebzineItem[];
  brandedContents: WebzineItem[];
  report: ReportItem[];
  email: string;
  linkedin: string;
};

const configs: Configs = {
  name: 'Jungwon Byeon',
  descriptions: ['PR Manager'],
  about: [
    '국문학도로서 겸비한 기초 커뮤니케이션 역량, 기업 PR 실무 경험, 정책 성과 확산 경험을 가지고 있습니다.',
    '브랜드에 대한 이해와 애정을 바탕으로 PR 담당자로서 긍정적인 대내외 커뮤니케이션을 이끌고 있습니다.',
  ],
  education: [
    {
      title: '한양대학교',
      logo: HanyangUnivLogo,
      descriptions: [
        '졸업 평점 : 4.03 / 4.5',
        '주전공 : 국어국문학과',
        '부전공 : 영어커뮤니케이션',
        '기타 : 관광학과 수업 30학점 이상 이수',
      ],
    },
    {
      title: 'University College Utrecht',
      logo: UtrehtUnivLogo,
      descriptions: [
        '2012년 ~ 2013년 교환학생',
        'The first university college in the Netherlands',
        'Awarded the Top Rated Programme quality seal by Keuzegids since 2013 annually',
      ],
    },
  ],
  experience: [
    {
      logo: CI_KoFONS,
      title: '한국원자력안전재단',
      subTitle: '정책센터 정책소통팀',
      descriptions: '콘텐츠 기획 제작 및 대내외 커뮤니케이션',
      date: '2020년 8월 ~ 2021년 8월',
    },
    {
      logo: CI_KRT,
      title: '(주) 케이알티',
      subTitle: '경영기획사업부 홍보팀',
      descriptions: '언론홍보 전략 수립 및 실행, 이슈 대응 및 위기 관리, 브랜드 이미지 제고',
      date: '2014년 10월 ~ 2020년 8월',
    },
  ],
  project: [
    {
      title: '한국원자력안전재단',
      description: '콘텐츠 기획 제작 및 대내외 커뮤니케이션',
      startDate: '2020년 8월 31일',
      endDate: '2021년 8월 30일',
      details: [
        {
          title: '대외 콘텐츠 기획 · 제작',
          contents: [
            '국민참여 영상 기획, 제작',
            '2020 원자력안전 국민참여단 리포트 공동 집필',
            '제3차 원자력안전종합계획 수립을 위한 국민제안서 집필',
          ],
        },
        {
          title: '국민참여단 콘텐츠 관련 유관기관 소통 담당',
          contents: [
            '원자력안전위원회 안전정책과 소통',
            '원자력안전기술원/원자력통제기술원/국회 요구자료 대응',
          ],
        },
        {
          title: '국민참여 SNS 운영 · 관리',
          contents: [
            '원자력안전 국민참여 블로그/페이스북/인스타그램 개설 및 운영',
            '콘텐츠 기획 및 제작',
          ],
        },
      ],
    },
    {
      title: '교원 KRT',
      description: '언론홍보 / 콘텐츠 / 브랜딩 / 행사 등',
      startDate: '2014년 10월 1일',
      endDate: '2020년 8월 28일',
      details: [
        {
          title: '언론홍보 · 커뮤니케이션',
          contents: [
            '대내외 이슈 모니터링',
            '미디어 리스트, 출입 기자단 관리',
            '부정 이슈 보도 발생 시 피해 최소화를 위한 적극 커뮤니케이션, 전사 언론 응대 매뉴얼 배포',
            '(예: 다낭 교통사고 보도의 건, SBS 뉴스토리 사례 등)',
          ],
        },
        {
          title: '보도자료',
          contents: [
            '시즈널리티, 이슈 반영한 보도자료 아젠다 설정',
            '주 2회 릴리즈(2018년 주 1회 변경)',
            '보도자료 아카이브 관리',
          ],
        },
        {
          title: '기획기사 (애드버토리얼)',
          contents: [
            '주요 일간지 여행 특집 세션, 계간지, 네이버 여행+ 등 노출',
            '관광청 지원금 프로모션 연계 기획기사 노출',
            '중앙일보 더,오래 협찬 진행',
          ],
        },
        {
          title: '홍보센터 개설',
          contents: ['주도적으로 홈페이지 홍보센터 기획, 개설, 운영'],
        },
        {
          title: '콘텐츠',
          contents: [
            'KRTalk 작성 및 운영(2015.10~)',
            '공식 유튜브 활성화 방안 기획, 신규 콘텐츠 기획, 스크립트 작업 F/U',
          ],
        },
        {
          title: '브랜딩',
          contents: [
            '브랜드 광고 전략 수립 및 집행',
            '인천국제공항 입국장 DID 브랜디드 콘텐츠 카피라이팅',
            '신문광고 소재 기획 및 매체 운영 관리, 수익쉐어형 신규 공동사업건 진행(중앙/동아)',
            'RD/종편 PPL/전동차 음성 광고/서울 시내버스 YAP TV 광고 등 집행 사례',
            'CI 리뉴얼, 로고 변경 참여',
            "브랜디드 서비스 '홈픽업' 런칭 및 홍보",
          ],
        },
        {
          title: '행사',
          contents: [
            '2018 K-라이프트렌드쇼, 2017 축제여행박람회 KRT 부스 운영(PM)',
            '종무식, 창립기념일 등 사내 행사 PM',
            'CSR 활동 관리(동방사회복지회/한기범희망나눔재단)',
          ],
        },
      ],
    },
  ],
  article: [
    {
      title: '문학과 역사 어우러진 발칸 4국으로의 초대',
      description: '중앙일보, 2019.04.18',
      content: Article1,
    },
    {
      title: '"YOLO" 낯선 땅에서 참된 행복을 만나다',
      description: '조선일보, 2017.03.09',
      content: Article2,
    },
    {
      title: "경험해 보지 못한 또 다른 유럽... 알차게 돌아보는 '베스트 6선'",
      description: '중앙일보, 2020.01.16',
      content: Article3,
    },
    {
      title: '낯설어 더 매력적인 그곳, 중남미',
      description: '동아일보, 2020.01.16',
      content: Article4,
    },
    {
      title: '보도자료 왕, 홍보팀의 대가!',
      description: '(인터뷰) 한국관광신문, 2020.01.06',
      content: Article5,
    },
    {
      title: '여행 전문가가 추천하는 3월 안성맞춤 해외여행지',
      description: '(코멘트) 노컷뉴스, 2018.03.06',
      content: Article6,
    },
    {
      title: '"공항까지 모셔다드립니다" 진화하는 여행사 고객편의 서비스',
      description: '(인터뷰) 머니투데이방송, 2016.12.06',
      content: Article7,
    },
    {
      title: '어느새 스물…KRT, 창립 20주년 기념행사 성료',
      description: '중앙일보, 2019.10.28',
      content: Article8,
    },
  ],
  webzine: [
    {
      image: Webzine1,
      title: '우정 여행지',
      subTitle: 'KRTalk Vol.31',
      url: 'https://www.krt.co.kr/tourinfo/webzineView?seq=31',
      content: Webzine1Content,
    },
    {
      image: Webzine2,
      title: '휘게 라이프 탐구',
      subTitle: 'KRTalk Vol.35',
      url: 'https://www.krt.co.kr/tourinfo/webzineView?seq=35',
      content: Webzine2Content,
    },
    {
      image: Webzine3,
      title: '꿈의 여행지 아프리카',
      subTitle: 'KRTalk Vol.47',
      url: 'https://www.krt.co.kr/tourinfo/webzineView?seq=47',
      content: Webzine3Content,
    },
    {
      image: Webzine4,
      title: '해외여행 상식',
      subTitle: 'KRTalk Vol.59',
      url: 'https://www.krt.co.kr/tourinfo/webzineView?seq=59',
      content: Webzine4Content,
    },
  ],
  brandedContents: [
    {
      image: BrandedContent1,
      title: '(유튜브) 엄마랑 치앙라이 with 태국 관광청',
      subTitle: '구성/출연/촬영 등',
      url: 'https://youtu.be/365n4qMTYZM',
    },
    {
      image: BrandedContent2,
      title: '(뉴스) 홈픽업 서비스',
      subTitle: '인터뷰/취재 Arrange',
      url: 'https://byeonjungwon.github.io/assets/BrandedContents_2_Video.mp4',
    },
    {
      image: BrandedContent3,
      title: '(행사 온에어) 함께 만든 우리 계획',
      subTitle: '기획/구성/PM 역할 수행',
      url: 'https://blog.naver.com/kofons_ourplan/222408817131',
    },
    {
      image: BrandedContent4,
      title: '(행사 온에어) 함께 한 시간',
      subTitle: '기획/구성/PM 역할 수행',
      url: 'https://blog.naver.com/kofons_ourplan/222412865136',
    },
  ],
  report: [
    {
      image: Report1,
      title: '제3차 원자력안전 종합계획 수립을 위한 국민제안서',
      date: '총괄 집필, 2021.01 ~ 06',
      url: 'https://ourplan.nssc.go.kr/boardDownload.es?bid=0004&list_no=652&seq=1',
    },
    {
      image: Report2,
      title: '2020 원자력안전 국민참여단 리포트',
      date: '공동 집필, 2021.01 ~ 02',
      url: 'https://ourplan.nssc.go.kr/boardDownload.es?bid=0004&list_no=559&seq=1',
    },
  ],
  email: 'pr_janet@naver.com',
  linkedin: 'byeonjungwon',
};

export default configs;
