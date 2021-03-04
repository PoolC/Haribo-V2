import React from 'react';
import styled from 'styled-components';
import colors from '../../../lib/styles/colors';

const AdminHomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 20px ${colors.gray[1]};
  flex: 4;
  border-radius: 50px;
  padding: 30px 40px;
`;

const TitleContainer = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 2rem 0 3rem 0;
  word-break: keep-all;
  text-align: center;
  line-height: 2rem;
`;

const ContentsContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  p {
    margin-bottom: 0.5rem;
    word-break: keep-all;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    font-weight: 300;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 500;
    margin: 2rem 0;
  }
`;

const AdminHome = () => {
  return (
    <AdminHomeBlock>
      <TitleContainer>관리자 페이지 이용법</TitleContainer>
      <ContentsContainer>
        <p>PoolC의 임원이 되신 것을 축하합니다.^^</p>
        <p>여기서는 관리자 페이지 사용 방법을 알려드리겠습니다.</p>
        <p>귀찮아도 꼭 읽어주세요!</p>
        <p>
          참고로, 관리자 페이지는 모바일이 아닌 데스크탑 환경에서 접속하시는
          것을 추천드립니다.
        </p>
        <h2>0. 동아리 정보 관리 탭</h2>
        <p>
          회장 이름, 회장의 전화번호, 동아리방의 위치 등의 정보를 변경할 수
          있습니다.
        </p>
        <p>
          매 학기마다 회장이 새로 선출되므로 새 학기가 시작되면 가장 먼저 이
          탭에서 정보를 수정해주세요.
        </p>
        <p>
          회장의 전화번호나 동아리방 위치가 변경되면, 이 탭에서 수정해 주셔야
          홈페이지의 Footer에 반영됩니다.
        </p>
        <p>
          또한 동아리 홈페이지 접속 시 메인에서 가장 먼저 볼 수 있는 이미지
          캐러셀에 들어갈 이미지들을 관리할 수 있습니다.
        </p>
        <p>상단 메뉴 중 'PoolC' 메뉴는 동아리에 대한 소개를 담고 있는데,</p>
        <p>
          관리자 페이지의 '동아리 정보 관리' 탭에서는 이 'PoolC' 메뉴 중 '동아리
          소개' 부분에 들어갈 내용을 마크다운 형식으로 편집할 수도 있습니다.
        </p>
        <p>
          매 학기 초 신입 회원 모집 기간이 되면, 이 탭에서 '가입 기간 설정'을
          '가입 가능 기간'으로 바꿔주세요.
        </p>
        <p>
          '가입 가능 기간'으로 설정 후 '지원서 링크'에 지원서 주소를 넣어주세요.
        </p>
        <p>
          그러면 비로그인 시 apply 메뉴를 눌렀을 때 해당 지원서 주소로
          연결됩니다.
        </p>
        <p>
          신입 회원 모집 기간이 끝나면면, 다시 '가입 기간 설정'을 '가입 불가
          기간'으로 바꿔주세요.
        </p>
        <h2>1. 회원 관리 탭</h2>
        <p>
          회원 가입 승인, 회원 탈퇴, 관리자 임명 및 해제 등의 동작을 할 수 있는
          탭입니다.
        </p>
        <p>또한 회원의 정보 역시 여기서 확인할 수 있습니다.</p>
        <p>
          회원은 관리자가 회원 가입을 승인해야 정상적으로 홈페이지 이용이
          가능합니다.
        </p>
        <p>
          학기가 바뀌어 새로운 임원이 임명되면 이 탭에서 관리자 권한을
          부여해주세요.
        </p>
        <p>
          그러면 그 사람도 이 관리자 페이지 접속 권한을 부여받고, 홈페이지
          관리를 할 수 있습니다.
        </p>
        <p>더이상 임원이 아닌 동아리원의 관리자 권한은 해제해주세요.</p>
        <h2>2. 최소활동기준 관리 탭</h2>
        <p>현재 최소 활동 기준을 확인하고 변경할 수 있습니다.</p>
        <p>
          또한 이번 학기에 활동 멤버들이 최소 활동 기준을 만족하여 다음 학기
          회원 자격 유지가 가능한지 확인할 수 있습니다.
        </p>
        <p>
          회칙에 따라 여러 이유로 최소 활동 기준을 채우지 않아도 면제가 되는
          경우가 있습니다.
        </p>
        <p>
          특정 회원의 최소 활동 기준 충족을 면제시키려면 이 탭의 '동작'에서
          '면제' 버튼을 눌러주세요.
        </p>
        <p>면제된 회원을 취소하려면 '해제' 버튼을 눌러주세요.</p>
        <p>
          최소 활동 기준을 충족하거나, 면제가 된 경우 회원 자격이 유지된다고
          표시됩니다.
        </p>
        <h2>3. 게시판 관리 탭</h2>
        <p>
          홈페이지 'Boards' 메뉴에 나타나는 게시판들과 관련된 정보들을 관리할 수
          있습니다.
        </p>
        <p>
          생성되어 있는 게시판을 조회하고, 새로운 게시판을 생성하고, 기존
          게시판을 수정하거나 삭제할 수 있습니다.
        </p>
        <p>
          기존 게시판의 이름을 변경하거나, 읽기 권한 및 쓰기 권한을 변경할 수
          있습니다.
        </p>
        <p>
          게시판 생성 또는 수정 시에는 읽기 권한과 쓰기 권한을 신중하게
          확인해주세요.
        </p>
        <p>또한 게시판 삭제 역시 신중하게 해 주세요. 복구가 불가합니다.</p>
        <h2>4. 프로젝트 관리 탭</h2>
        <p>
          홈페이지 'Projects' 메뉴에 나타나는 프로젝트들을 관리할 수 있는
          탭입니다.
        </p>
        <p>
          새로운 프로젝트를 생성하고, 기존 프로젝트를 수정하거나 삭제할 수
          있습니다.
        </p>
        <p></p>
        <p></p>
        <h2>5. 활동 관리 탭</h2>
        <p>
          홈페이지 'Activities' 메뉴에 나타나는 세미나 및 스터디들을 관리할 수
          있는 탭입니다.
        </p>
        <p>
          각 세미나 및 스터디들의 신청 가능 여부를 변경하거나 잘못 등록된 세미나
          및 스터디를 삭제할 수 있습니다.
        </p>
        <p>
          신청 가능 여부가 o 인 세미나 및 스터디는 '동작'에서 '닫기' 버튼을
          클릭하면 더이상 신청할 수 없도록 수정할 수 있습니다.
        </p>
        <p>
          신청 가능 여부가 x 인 세미나 및 스터디는 '동작'에서 '열기' 버튼을
          클릭하여 신청이 가능하도록 수정할 수 있습니다.
        </p>
        <h2>6. 도서 관리 탭</h2>
        <p>
          홈페이지 'Books' 메뉴에 나타나는 도서들을 관리할 수 있는 탭입니다.
        </p>
        <p>
          새로운 도서를 등록하고, 기존 도서를 수정하거나 삭제할 수 있습니다.
        </p>
        <p></p>
        <p></p>
      </ContentsContainer>
    </AdminHomeBlock>
  );
};

export default AdminHome;
