// ============================================================
//  비급여 한약 데이터 — 이 파일만 수정하면 전체 사이트에 반영됩니다
// ============================================================

var CLINIC_INFO = {
  "name": "성산부부한의원",
  "address": "창원시 성산구 삼정자로43번길8 402호 403호 성산부부한의원",
  "phone": "055-287-0227",
  "fax": "055-287-0228",
  "hours": "평일 10:00 ~ 20:00 (점심시간 13:00~14:00) / 토요일·공휴일 09:00 ~ 13:00 / 일요일 휴진",
  "formFirstVisit": "https://docs.google.com/forms/d/1VK0ZM-uWZBpeRs6o0XF2EARRrwkWRFAE2SospUJQFbc/viewform",
  "formRevisit": "https://docs.google.com/forms/d/e/1FAIpQLScA7A6JgpweIRD2SUmaGNpp6Om0T3KuMbh4Jk7fALBL04o-8Q/viewform"
};

var CATEGORIES = ["전체","맞춤한약","보약·보양","소화기","호흡기","다이어트","기타"];

var MEDICINES = [
  {
    "id": "gongjindan",
    "name": "공진단",
    "category": "보약·보양",
    "price": "150,000",
    "unit": "10환 기준",
    "description": "<p>공진단(拱辰丹)은 원나라 위역림의 《세의득효방》에 수록된 처방으로,</p><p>녹용·당귀·산수유·사향을 주원료로 합니다.</p><p>간장(肝臟)을 보하여 신수(腎水)와 심화(心火)의 균형을 잡아 주며,</p><p>만성 피로, 집중력 저하, 면역력 감소 등에 효과적입니다.</p>",
    "ingredients": "녹용, 당귀, 산수유, 사향",
    "caution": "임산부·수유 중에는 복용 전 반드시 상담하세요. 사향 성분 과민자 주의.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084939811_nzc36.jpg"
  },
  {
    "id": "실속-공진단-1781084124990",
    "name": "실속 공진단",
    "category": "보약·보양",
    "price": "290,000",
    "unit": "10환 기준",
    "description": "<p>나중에</p>",
    "ingredients": "녹용, 당귀, 산수유, 사향",
    "caution": "",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084551599_544q7.jpg"
  },
  {
    "id": "gyeongokgo-home",
    "name": "경옥고 가정용",
    "category": "보약·보양",
    "price": "99,000",
    "unit": "30포",
    "tags": [
      "경옥고",
      "가정용",
      "보양"
    ],
    "summary": "가정에서 간편하게 복용할 수 있는 경옥고 30포 제품입니다.",
    "description": "전통 경옥고 처방을 현대적으로 재현한 가정용 제품입니다.\n폐를 보하고 노화를 방지하며 만성 피로, 기력 저하에 꾸준히 복용하기 좋습니다.",
    "effects": [
      "기력 회복",
      "폐 기능 보조",
      "노화 방지",
      "피로 해소"
    ],
    "ingredients": "생지황, 인삼, 백복령, 봉밀(꿀)",
    "caution": "당뇨 환자는 복용 전 상담.",
    "dosage": "1일 1~2포 공복 복용"
  },
  {
    "id": "gyeongokgo",
    "name": "수 경옥고",
    "category": "보약·보양",
    "price": "80,000",
    "unit": "100g 기준",
    "description": "<p>경옥고(瓊玉膏)는 생지황·인삼·백복령·꿀로 만든 고(膏) 형태의 보약입니다.</p><p>폐를 윤택하게 하고 신장의 정기를 보충하여 허약 체질, 기침·천식 개선,</p><p>노화 방지에 널리 사용되어 왔습니다.</p>",
    "ingredients": "생지황, 인삼, 백복령, 봉밀(꿀)",
    "caution": "당뇨 환자는 꿀 함량으로 혈당 상승 가능 — 의사 상담 후 복용.",
    "image": ""
  },
  {
    "id": "ssanghwa-box",
    "name": "쌍화탕 박스",
    "category": "보약·보양",
    "price": "60,000",
    "unit": "1박스 (15팩)",
    "tags": [
      "쌍화탕",
      "피로",
      "기혈보충"
    ],
    "summary": "기혈을 보하는 쌍화탕 15팩 박스 제품으로 선물용으로도 좋습니다.",
    "description": "전통 쌍화탕 처방을 파우치 형태로 제조한 박스 제품입니다.\n과로, 감기 후 회복, 피로 해소에 간편하게 복용할 수 있으며 선물용으로도 많이 찾습니다.",
    "effects": [
      "기혈 보충",
      "피로 회복",
      "식욕 증진",
      "감기 후 체력 회복"
    ],
    "ingredients": "황기, 백작약, 숙지황, 당귀, 천궁, 계피, 감초, 생강, 대추",
    "caution": "열이 심한 감기 초기에는 복용 자제.",
    "dosage": "1일 1~2팩, 따뜻하게 복용"
  },
  {
    "id": "ssanghwatang",
    "name": "쌍화탕",
    "category": "보약·보양",
    "price": "8,000",
    "unit": "1첩",
    "tags": [
      "기혈보충",
      "피로",
      "감기 후 회복"
    ],
    "summary": "기혈(氣血)을 함께 보하는 대표 탕약으로 과로·감기 후 회복에 처방합니다.",
    "description": "쌍화탕(雙和湯)은 기(氣)와 혈(血)을 동시에 보충하는 처방으로,\n황기·백작약·숙지황·당귀·천궁·계피·감초·생강·대추가 들어갑니다.\n체력 저하, 식욕 감퇴, 감기 후 무기력함에 효과적입니다.",
    "effects": [
      "기혈 보충",
      "피로 회복",
      "식욕 증진",
      "감기 후 체력 회복"
    ],
    "ingredients": "황기, 백작약, 숙지황, 당귀, 천궁, 계피, 감초, 생강, 대추",
    "caution": "열이 심한 감기 초기에는 복용을 삼가고 의사와 상담하세요.",
    "dosage": "1일 2회 식후 1시간, 따뜻하게 복용"
  },
  {
    "id": "matchum-15",
    "name": "맞춤한약 15일",
    "category": "맞춤한약",
    "price": "225,000",
    "unit": "15일 30팩",
    "tags": [
      "맞춤처방",
      "탕약",
      "15일"
    ],
    "summary": "한의사가 체질과 증상에 맞게 조제하는 15일분 맞춤 한약입니다.",
    "description": "개인 체질·증상에 맞춰 한의사가 직접 처방·조제하는 탕약입니다.\n하루 2팩(아침·저녁) 복용하며, 냉장 보관합니다.",
    "effects": [
      "체질 맞춤 치료",
      "증상 개선",
      "체력 회복"
    ],
    "ingredients": "처방에 따라 개인별 조제",
    "caution": "처방전 없이 임의 복용 금지.",
    "dosage": "1일 2팩 (아침·저녁) 식후 복용"
  },
  {
    "id": "matchum-30",
    "name": "맞춤한약 30일",
    "category": "맞춤한약",
    "price": "450,000",
    "unit": "30일 60팩",
    "tags": [
      "맞춤처방",
      "탕약",
      "30일"
    ],
    "summary": "한의사가 체질과 증상에 맞게 조제하는 30일분 맞춤 한약입니다.",
    "description": "개인 체질·증상에 맞춰 한의사가 직접 처방·조제하는 탕약입니다.\n하루 2팩(아침·저녁) 복용하며, 냉장 보관합니다.",
    "effects": [
      "체질 맞춤 치료",
      "증상 개선",
      "체력 회복"
    ],
    "ingredients": "처방에 따라 개인별 조제",
    "caution": "처방전 없이 임의 복용 금지.",
    "dosage": "1일 2팩 (아침·저녁) 식후 복용"
  },
  {
    "id": "soa-under30",
    "name": "소아한약 (30kg 미만)",
    "category": "맞춤한약",
    "price": "350,000",
    "unit": "30일 60팩",
    "tags": [
      "소아",
      "성장",
      "30kg미만"
    ],
    "summary": "30kg 미만 소아의 성장·면역·소화 등에 맞춤 처방하는 한약입니다.",
    "description": "소아 체중·연령·증상에 맞게 처방·조제하는 탕약입니다.\n성장 촉진, 식욕 부진, 잦은 감기, 면역력 강화에 활용됩니다.",
    "effects": [
      "성장 보조",
      "면역력 강화",
      "소화 개선",
      "체력 증진"
    ],
    "ingredients": "처방에 따라 개인별 조제",
    "caution": "반드시 한의사 처방 후 복용.",
    "dosage": "1일 2팩 (아침·저녁) 식후 복용"
  },
  {
    "id": "soa-over30",
    "name": "소아한약 (30kg 이상)",
    "category": "맞춤한약",
    "price": "450,000",
    "unit": "30일 60팩",
    "tags": [
      "소아",
      "성장",
      "30kg이상"
    ],
    "summary": "30kg 이상 소아의 성장·면역·소화 등에 맞춤 처방하는 한약입니다.",
    "description": "소아 체중·연령·증상에 맞게 처방·조제하는 탕약입니다.\n성장 촉진, 식욕 부진, 잦은 감기, 면역력 강화에 활용됩니다.",
    "effects": [
      "성장 보조",
      "면역력 강화",
      "소화 개선",
      "체력 증진"
    ],
    "ingredients": "처방에 따라 개인별 조제",
    "caution": "반드시 한의사 처방 후 복용.",
    "dosage": "1일 2팩 (아침·저녁) 식후 복용"
  },
  {
    "id": "sukchwi-hwan",
    "name": "숙취해소환",
    "category": "기타",
    "price": "30,000",
    "unit": "30스틱",
    "tags": [
      "숙취해소",
      "음주",
      "간"
    ],
    "summary": "음주 전후 간 보호와 숙취 해소에 도움을 주는 한방 스틱 제품입니다.",
    "description": "헛개나무·칡꽃·오리나무 추출물 등 간 기능 보조 한약재로 만든 스틱형 제품입니다.\n음주 전 또는 후에 복용하면 알코올 분해를 돕고 다음날 불쾌감을 줄여줍니다.",
    "effects": [
      "숙취 해소",
      "간 기능 보조",
      "알코올 분해 촉진",
      "두통·메스꺼움 완화"
    ],
    "ingredients": "헛개나무, 칡꽃, 오리나무 추출물 외",
    "caution": "간 질환자는 복용 전 상담.",
    "dosage": "음주 전후 1스틱 복용"
  },
  {
    "id": "youngsin-hwan",
    "name": "영신환",
    "category": "소화기",
    "price": "24,000",
    "unit": "30스틱",
    "tags": [
      "소화제",
      "위장",
      "소화불량"
    ],
    "summary": "소화불량·식체·복부팽만에 빠르게 작용하는 한방 소화제입니다.",
    "description": "위장 운동을 촉진하고 소화 효소 분비를 돕는 한약재로 만든 스틱형 소화제입니다.\n과식, 식체, 명치 답답함, 복부팽만에 복용합니다.",
    "effects": [
      "소화 촉진",
      "식체 해소",
      "복부팽만 완화",
      "위장 기능 회복"
    ],
    "ingredients": "산사, 맥아, 신곡, 지실 외",
    "caution": "임산부는 복용 전 상담.",
    "dosage": "식후 1스틱, 1일 3회"
  },
  {
    "id": "bohwa-hwan",
    "name": "보화소합원",
    "category": "소화기",
    "price": "20,000",
    "unit": "30환",
    "tags": [
      "소화제",
      "위장",
      "식체"
    ],
    "summary": "식체·소화불량·가스에 처방하는 전통 한방 소화환입니다.",
    "description": "소화를 돕고 위장 기능을 회복시키는 한약재로 만든 환약 형태의 소화제입니다.\n식후 더부룩함, 가스, 명치 통증에 빠르게 작용합니다.",
    "effects": [
      "소화 개선",
      "가스 배출",
      "식체 해소",
      "위장 안정"
    ],
    "ingredients": "목향, 사인, 지실, 후박 외",
    "caution": "임산부는 복용 전 상담.",
    "dosage": "식후 1~2환, 1일 3회"
  },
  {
    "id": "sojeok-hwan",
    "name": "소적건비환",
    "category": "소화기",
    "price": "9,000",
    "unit": "1통",
    "tags": [
      "소화제",
      "소아",
      "식욕"
    ],
    "summary": "소화기를 강화하고 식욕을 돋우는 한방 소화환입니다.",
    "description": "비위(脾胃)를 튼튼히 하고 음식 소화를 도와 만성 소화불량, 식욕 부진, 복통에 활용됩니다.",
    "effects": [
      "소화기 강화",
      "식욕 증진",
      "만성 소화불량 개선",
      "복통 완화"
    ],
    "ingredients": "백출, 산사, 맥아, 신곡 외",
    "caution": "임산부는 복용 전 상담.",
    "dosage": "식전 복용, 1일 2~3회"
  },
  {
    "id": "nalssin-1",
    "name": "날씬환 1달",
    "category": "다이어트",
    "price": "190,000",
    "unit": "1달분",
    "description": "<p>방풍통성산·태음조위탕 등 다이어트 처방을 기반으로 개인 체질에 맞게 가감하여 조제한 환약입니다.</p><p>식욕 억제, 부종 완화, 대사 촉진을 통해 건강한 체중 감량을 돕습니다.</p>",
    "ingredients": "체질별 개인 처방",
    "caution": "반드시 한의사 상담 후 처방. 임산부 금기.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084505695_lnqc7.jpg"
  },
  {
    "id": "가정용-경옥고-1781084165274",
    "name": "가정용 경옥고",
    "category": "보약·보양",
    "price": "90000",
    "unit": "30포",
    "description": "<p>나중에</p>",
    "ingredients": "생지황, 인삼, 백복령, 봉밀(꿀)",
    "caution": "",
    "image": ""
  },
  {
    "id": "nalssin-3",
    "name": "날씬환 3달",
    "category": "다이어트",
    "price": "390,000",
    "unit": "3달분",
    "description": "<p>방풍통성산·태음조위탕 등 다이어트 처방을 기반으로 개인 체질에 맞게 가감하여 조제한 환약입니다.</p><p>3달 장기 복용으로 요요 없는 체중 관리를 목표로 합니다.</p>",
    "ingredients": "체질별 개인 처방",
    "caution": "반드시 한의사 상담 후 처방. 임산부 금기.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084519415_8gd42.jpg"
  },
  {
    "id": "pas-normal",
    "name": "파스 (일반)",
    "category": "기타",
    "price": "5,000",
    "unit": "6매",
    "tags": [
      "파스",
      "근육통",
      "외용"
    ],
    "summary": "근육통·관절통·타박상에 사용하는 일반 한방 파스입니다.",
    "description": "한약 성분이 함유된 일반 파스로 근육통, 관절통, 타박상, 어깨결림에 부착합니다.",
    "effects": [
      "근육통 완화",
      "관절통 완화",
      "타박상 회복",
      "혈액순환 촉진"
    ],
    "ingredients": "멘톨, 캄파, 한약 추출물 외",
    "caution": "상처 부위·점막에 사용 금지. 피부 과민 반응 시 즉시 제거.",
    "dosage": "환부에 1일 1~2회 부착"
  },
  {
    "id": "pas-taping",
    "name": "파스 (테이핑)",
    "category": "기타",
    "price": "7,000",
    "unit": "6매",
    "tags": [
      "파스",
      "테이핑",
      "스포츠"
    ],
    "summary": "활동 중에도 고정력이 좋은 테이핑형 한방 파스입니다.",
    "description": "일반 파스보다 점착력이 강한 테이핑형 파스로 운동 중에도 잘 떨어지지 않습니다.\n근육통, 관절 보호, 스포츠 부상 회복에 활용됩니다.",
    "effects": [
      "근육통 완화",
      "관절 보호",
      "활동 중 고정",
      "부상 회복"
    ],
    "ingredients": "멘톨, 캄파, 한약 추출물 외",
    "caution": "상처 부위·점막에 사용 금지. 피부 과민 반응 시 즉시 제거.",
    "dosage": "환부에 1일 1~2회 부착"
  },
  {
    "id": "cheongnyeom-go",
    "name": "청염고",
    "category": "기타",
    "price": "8,000",
    "unit": "1개",
    "description": "<p>청열(淸熱) 효과가 있는 한약재로 만든 연고로 피부 염증, 가려움, 발진에 외용합니다.</p>",
    "ingredients": "황련, 황금, 고삼 외 한약 추출물",
    "caution": "점막·눈 주위 사용 금지. 증상 악화 시 즉시 사용 중단.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084495840_9ju7s.jpg"
  },
  {
    "id": "seupjin-go",
    "name": "습진고",
    "category": "기타",
    "price": "8,000",
    "unit": "1개",
    "description": "<p>습열(濕熱)을 제거하는 한약재로 만든 연고로 습진, 진물, 가려움증에 외용합니다.</p>",
    "ingredients": "고삼, 사상자, 황백 외 한약 추출물",
    "caution": "점막·눈 주위 사용 금지. 임산부는 상담 후 사용.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084486039_yg6dx.jpg"
  },
  {
    "id": "biyeom-go",
    "name": "비염고",
    "category": "호흡기",
    "price": "8,000",
    "unit": "1개",
    "description": "<p>신이(辛夷)·박하 등 비염에 효과적인 한약재로 만든 연고입니다.</p><p>콧속 점막에 얇게 도포하여 비염 증상 완화와 코막힘 해소에 활용됩니다.</p>",
    "ingredients": "신이, 박하, 창이자 외 한약 추출물",
    "caution": "눈에 들어가지 않도록 주의. 과민 반응 시 사용 중단.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084476373_lxe46.jpg"
  },
  {
    "id": "jawun-go",
    "name": "자운고",
    "category": "기타",
    "price": "12,000",
    "unit": "1개",
    "description": "<p>자초(紫草)·당귀 등을 주원료로 만든 전통 자운고(紫雲膏)입니다.</p><p>피부 보습과 재생을 돕고 아토피, 건조증, 갈라짐, 튼살, 가벼운 화상 후 회복에 활용됩니다.</p>",
    "ingredients": "자초, 당귀, 밀랍, 참기름",
    "caution": "개방성 상처에는 감염 우려가 있으니 주의.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084466193_apffe.jpg"
  },
  {
    "id": "tongbisu",
    "name": "통비수",
    "category": "호흡기",
    "price": "12,000",
    "unit": "1개",
    "tags": [
      "비염",
      "코세척",
      "외용"
    ],
    "summary": "비염·코막힘 개선을 위해 코에 뿌리는 한방 비강 스프레이입니다.",
    "description": "신이·박하·창이자 등 비염에 효과적인 한약재 추출물로 만든 비강 스프레이입니다.\n코 안을 세정하고 점막을 진정시켜 비염, 코막힘, 건조감을 완화합니다.",
    "effects": [
      "비염 완화",
      "코막힘 해소",
      "비강 세정",
      "점막 보호"
    ],
    "ingredients": "신이, 박하, 창이자, 황금 추출물",
    "caution": "눈에 들어가지 않도록 주의.",
    "dosage": "1일 3~4회 각 비강에 1~2회 분무"
  },
  {
    "id": "ilhwang-go",
    "name": "일황고",
    "category": "기타",
    "price": "15,000",
    "unit": "1개",
    "description": "<p>황련·황금·황백 등 청열 해독 효과가 있는 한약재로 만든 연고입니다.</p><p>여드름, 뾰루지, 피지 과다 부위에 국소 도포하여 염증을 가라앉히고 피부를 진정시킵니다.</p>",
    "ingredients": "황련, 황금, 황백, 치자 추출물",
    "caution": "눈·점막에 사용 금지. 자극 시 즉시 제거.",
    "image": "https://raw.githubusercontent.com/youbearar-cmd/ssbubupage/main/images/1781084455700_7xd4g.jpg"
  }
];

// localStorage 오버라이드
(function () {
  try {
    var sc = localStorage.getItem('hanui_clinic');
    if (sc) Object.assign(CLINIC_INFO, JSON.parse(sc));
    var sm = localStorage.getItem('hanui_medicines');
    if (sm) { MEDICINES.length = 0; JSON.parse(sm).forEach(function(m){ MEDICINES.push(m); }); }
    var sk = localStorage.getItem('hanui_categories');
    if (sk) { CATEGORIES.length = 0; JSON.parse(sk).forEach(function(c){ CATEGORIES.push(c); }); }
  } catch(e) {}
})();
