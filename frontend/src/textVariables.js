const textVariables = {
    mcdonaldsLogo: `1. 화면을 터치하고 [매장에서 식사] 또는 [테이크 아웃]을 선택합니다.
    2. 원하는 버거를 선택합니다. 
    3. 원하는 구성을 선택합니다. 
    ex) 케이준 맥치킨 단품/ 케이준 맥치킨 세트/ 케이준 
    4. 맥치킨+라지세트 재료 추가/변경을 원하시는 분은 [재료 추가/변경]을 터치합니다.
    5. 음료를 선택합니다. 
    6.주문을 확인하고 하단에 있는 [장바구니 추가]를 터치합니다. 
    7. [주문완료] 터치, [결재하기] 터치 후, 신용카드 결재하면 주문 완료입니다.` ,
    
    br: `1. 화면을 터치하고 원하는 아이스크림 맛을 선택합니다.
    2. 원하는 사이즈의 컵 또는 와플콘을 선택합니다.
    3. 추가 토핑이나 소스를 선택합니다 (선택 사항).
    4. 음료나 디저트 메뉴를 추가 선택합니다 (선택 사항).
    5. 주문 내역을 확인하고 [결제]를 터치합니다.
    6. [주문완료] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다.`,
    
    burgerking: `1. 화면을 터치하고 [매장에서 식사] 또는 [테이크 아웃]을 선택합니다.
    2. 원하는 버거나 세트 메뉴를 선택합니다.
    3. 원하는 구성이나 추가 토핑을 선택합니다.
    4. 음료나 사이드 메뉴를 추가로 선택합니다.
    5. 주문 내역을 확인하고 [장바구니 추가]를 터치합니다.
    6. [주문완료] 터치, [결재하기] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다. `,
    
    샐러디 : `1. 화면을 터치하고 원하는 샐러드 메뉴를 선택합니다.
    2. 추가 재료나 드레싱을 선택합니다.
    3. 음료나 디저트 메뉴를 추가 선택합니다 (선택 사항).
    4. 주문 내역을 확인하고 [결제]를 터치합니다.
    5. [주문완료] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다. `,

    kfc : `1. 메뉴판에서 원하는 치킨 또는 세트 메뉴를 선택합니다.
    2. 사이드 메뉴나 음료를 추가 선택합니다.
    3. 원하는 구성이나 추가 토핑을 선택합니다 (선택 사항).
    4. 주문 내역을 확인하고 [장바구니 추가]를 터치합니다.
    5. [주문완료] 터치, [결재하기] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다. 
    `,

    cgv : `1. 키오스크를 터치하여 시작합니다.
    2. 상영 영화 중에서 원하는 영화를 선택합니다.
    3. 시간 및 좌석을 선택합니다.
    4. 티켓 수와 좌석 종류를 선택합니다.
    5. 결재 방법을 선택하고 결재를 진행합니다.
    6. 영화 티켓을 출력하고, 영화 상영 시간에 맞춰 상영관으로 이동합니다.`,
    
    롯데시네마 : `1. 원하는 영화를 선택합니다.
    2. 상영 시간표에서 원하는 시간을 선택합니다.
    3. 좌석을 선택합니다.
    4. 팝콘, 음료 등의 스낵 메뉴를 선택합니다 (선택 사항).
    5. 결제 방법을 선택한 후 [결제하기]를 터치합니다.
    6. 티켓을 출력하거나 모바일로 받아 입장합니다.`,

    공차 : `1. 메뉴판에서 원하는 음료를 선택합니다.
    2. 당도와 얼음량을 조절합니다.
    3. 추가 토핑을 선택합니다 (선택 사항).
    4. 주문 내역을 확인하고 [결제]를 터치합니다.
    5. [주문완료] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다.`,
    
    이디야 : `1. 메뉴판에서 원하는 커피 또는 음료를 선택합니다.
    2. 사이즈와 추가 토핑을 선택합니다.
    3. 원하는 스낵이나 디저트를 선택합니다 (선택 사항).
    4. 주문 내역을 확인하고 [결제]를 터치합니다.
    5. [주문완료] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다.`,
    
    투썸 : `1. 메뉴판에서 원하는 커피 또는 디저트를 선택합니다.
    2. 디저트 메뉴를 추가 선택합니다 (선택 사항).
    3. 주문 내역을 확인하고 [결제]를 터치합니다.
    4. [주문완료] 터치 후, 신용카드나 현금으로 결제하면 주문 완료입니다.`,

    카카오택시 : `1. 앱을 실행합니다.
    2. 현재 위치를 확인하거나 목적지를 입력합니다.
    3. 택시 종류를 선택합니다 (일반/대형/바로타기).
    4. 요청하기를 터치합니다.
    5. 택시 배차 상태를 확인하고, 택시 도착을 기다립니다.
    6. 목적지에 도착한 후, 결재 방법을 선택하여 결재를 완료합니다.`,
    
    쏘카 : `1. 쏘카 앱을 실행하고 위치를 설정합니다.
    2. 원하는 차량 종류와 대여 시간을 선택합니다.
    3. 대여 위치 및 반납 위치를 설정합니다.
    4. 대여 내역을 확인하고 [예약하기]를 터치합니다.
    5. 예약 완료 후, 차량을 대여 위치에서 찾아 탑승하고 사용합니다.
    6. 사용 후 지정된 반납 위치에 차량을 반납합니다.`,

    버스타고 : `1. '버스타고' 앱을 실행하고 도착지를 입력합니다.
    2. 출발지를 설정하거나 현재 위치를 사용합니다.
    3. 가장 편리한 버스 노선을 선택합니다.
    4. 도착 예정 시간 및 노선 정보를 확인합니다.
    5. 필요시 알람 설정을 통해 하차 알림을 설정할 수 있습니다.`,
    
    네이버지도 : `1. '네이버지도' 앱을 실행합니다.
    2. 상단의 검색창에 목적지를 입력합니다.
    3. 길찾기 옵션에서 도보, 자동차, 대중교통 등을 선택합니다.
    4. 경로를 확인하고 길찾기를 시작합니다.
    5. 목적지까지의 경로를 따라 이동합니다.`,

    카카오맵 : `1. '카카오맵' 앱을 실행합니다.
    2. 검색창에 목적지를 입력하거나 지도에서 원하는 위치를 선택합니다.
    3. 길찾기 기능을 사용하여 최적의 경로를 확인합니다.
    4. 실시간 교통 정보를 확인하며 목적지까지 이동합니다.
    5. 주변의 맛집, 관광지, 숙박 정보 등 다양한 정보도 확인할 수 있습니다.`,
    
    구글맵 : `1. '구글맵' 앱을 실행합니다.
    2. 검색창에 목적지를 입력합니다.
    3. 길찾기를 통해 다양한 이동 수단의 경로를 확인합니다.
    4. 실시간 교통 상황, 출발 시간 예측 등의 정보를 확인합니다.
    5. 목적지까지의 안내를 받으며 이동합니다.`,
    
    쿠팡 : `1. 앱을 실행하고 로그인합니다.
    2. 검색창에 원하는 제품을 입력하거나 카테고리에서 제품을 선택합니다.
    3. 제품 상세 페이지에서 수량 및 옵션을 선택합니다.
    4. [장바구니 추가] 또는 [바로 구매]를 터치합니다.
    5. 결재 방법을 선택하고, 결재 정보를 확인합니다.
    6. 결재를 완료하고, 주문 확인 화면에서 주문 상태를 확인합니다.`,
    
    배달의민족 : `1. 배달의민족 앱을 실행하고 위치를 설정합니다.
    2. 원하는 음식 카테고리 또는 직접 검색하여 원하는 음식점을 선택합니다.
    3. 메뉴를 선택하고 장바구니에 추가합니다.
    4. 주문 정보를 확인하고 결제를 진행합니다.
    5. 음식이 도착하기를 기다립니다.`,

    요기요 : `1. 요기요 앱을 실행하고 위치를 설정합니다.
    2. 원하는 음식 카테고리를 선택하거나 검색하여 음식점을 선택합니다.
    3. 메뉴를 선택하고 주문을 진행합니다.
    4. 결제를 완료하고 음식 도착을 기다립니다.`,

    테이블링 :`1. 테이블링 앱을 실행합니다.
    2. 원하는 식당 또는 카페를 검색하거나 지도에서 선택합니다.
    3. 원하는 시간에 예약을 진행합니다.
    4. 예약한 시간에 매장을 방문합니다.`,

    catchtable : `1. catchtable 앱을 실행하고 원하는 식당을 검색합니다.
    2. 원하는 시간과 인원 수를 설정하고 예약을 진행합니다.
    3. 예약 확인 메시지를 확인하고 매장을 방문합니다.`,

    트립닷컴 : `1. 트립닷컴 앱을 실행하고 여행지를 검색합니다.
    2. 원하는 숙박 시설이나 투어를 선택합니다.
    3. 예약 및 결제를 진행합니다.
    4. 여행의 시작!`,

    여기어때 : `1. 여기어때 앱을 실행하고 숙박 시설을 검색합니다.
    2. 원하는 시설을 선택하고 예약 날짜 및 인원 수를 설정합니다.
    3. 결제를 진행하고 예약을 완료합니다.`,

    야놀자 : `1. 야놀자 앱을 실행하고 원하는 지역 및 숙소 타입을 검색합니다.
    2. 원하는 숙소를 선택하고 예약합니다.
    3. 결제를 완료하면 여행의 시작!`,

    아고다 : `1. 아고다 앱을 실행하고 숙박 시설 또는 여행지를 검색합니다.
    2. 원하는 옵션을 선택하고 예약을 진행합니다.
    3. 결제를 완료하고 여행을 즐깁니다.`,

    티빙 : `1. 티빙 앱을 실행합니다.
    2. 원하는 이용권을 구매합니다.
    3. 원하는 프로그램, 영화, 드라마를 선택합니다.
    4. 스트리밍을 시작하여 시청합니다.`,

    넷플릭스 : `1. 넷플릭스 앱을 실행하고 로그인합니다.
    2. 원하는 이용권을 구매합니다.
    3. 원하는 프로그램, 영화, 드라마를 검색하거나 추천 목록에서 선택합니다.
    4. 스트리밍을 시작하여 시청합니다.`,

    국민은행 : `1. 앱을 실행하고 로그인합니다.
    2. 원하는 은행 업무 (예: 계좌조회, 이체, 카드 관리)를 선택합니다.
    3. 필요한 정보를 입력하거나 확인합니다.
    4. 업무 내용을 확인하고, 진행을 선택합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,

    우리은행 : `1. 앱을 실행하고 로그인합니다.
    2. 원하는 은행 업무 (예: 계좌조회, 이체, 카드 관리)를 선택합니다.
    3. 필요한 정보를 입력하거나 확인합니다.
    4. 업무 내용을 확인하고, 진행을 선택합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,

    신한은행 : `1. 앱을 실행하고 로그인합니다.
    2. 원하는 은행 업무 (예: 계좌조회, 이체, 카드 관리)를 선택합니다.
    3. 필요한 정보를 입력하거나 확인합니다.
    4. 업무 내용을 확인하고, 진행을 선택합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,
    농협은행 : `1. 앱을 실행하고 로그인합니다.
    2. 원하는 은행 업무 (예: 계좌조회, 이체, 카드 관리)를 선택합니다.
    3. 필요한 정보를 입력하거나 확인합니다.
    4. 업무 내용을 확인하고, 진행을 선택합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,

    카카오페이 : `1. 카카오페이 앱을 실행하거나 카카오톡 내의 카카오페이 아이콘을 선택합니다.
    2. 원하는 결제 또는 송금 업무를 선택합니다.
    3. 결제 또는 송금 정보를 입력합니다.
    4. 비밀번호를 입력하여 거래를 승인합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,

    네이버페이 : `1. 네이버페이 앱을 실행하거나 네이버 앱에서 네이버페이를 선택합니다.
    2. 원하는 결제 또는 송금 업무를 선택합니다.
    3. 결제 또는 송금 정보를 입력합니다.
    4. 비밀번호를 입력하여 거래를 승인합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,

    토스 : `1. 토스 앱을 실행하고 로그인합니다.
    2. 원하는 결제, 송금, 투자 등의 업무를 선택합니다.
    3. 필요한 정보를 입력하거나 확인합니다.
    4. 비밀번호를 입력하여 거래를 승인합니다.
    5. 원하는 기능이 완료되면 앱을 종료합니다.`,
    
    

  };
  
  export default textVariables;