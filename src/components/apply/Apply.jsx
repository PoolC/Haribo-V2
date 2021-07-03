import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../lib/styles/colors';
import { Block, WhiteBlock } from '../../styles/common/Block.styles';
import ActionButton from '../common/Buttons/ActionButton';

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  & > div {
    margin: 1rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    word-break: keep-all;
  }
  & > div > div {
    margin: 0.5rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.2rem;
    font-size: 0.9rem;
    word-break: keep-all;
  }
`;

const StyledIcon = styled.i`
  font-size: 3rem;
  color: ${colors.red[0]};
`;

const Apply = ({ isSubscriptionPeriod, applyUri, history }) => {
  return (
    <Block>
      <WhiteBlock>
        {isSubscriptionPeriod && <Title>PoolC 신입 모집 지원 안내</Title>}
        <Content>
          {isSubscriptionPeriod && (
            <>
              <div>
                PoolC 신입 모집 지원을 위해,
                <br />
                아래 안내 사항을 모두 읽고 잘 따라와 주세요.
                <br />
                안내 사항을 준수하지 않으신 경우, 불이익이 발생할 수 있습니다.
              </div>
              <div>
                <h4>1. 회원가입 및 로그인</h4>
                <br />
                PoolC 홈페이지에 회원가입 후 로그인을 해 주세요.
                <br />
                불합격 시, 결과 발표 후 일주일 내로 DB에서 회원 정보가
                삭제됩니다.
              </div>
              <div>
                <h4>2. 면접 시간 제출</h4>
                <br />
                아래 버튼을 누르면 면접 시간 제출 페이지로 이동합니다.
                <br />
                로그인 후 해당 페이지에서 면접 시간을 선택해주세요.
                <div>
                  <ActionButton
                    onClick={() =>
                      window.open(
                        'http://alpha.poolc.org/interview-time',
                        '_blank',
                      )
                    }
                  >
                    면접 시간 제출
                  </ActionButton>
                </div>
              </div>
              <div>
                <h4>3. 지원서 제출</h4>
                <br />
                아래 버튼을 누르면 가입 신청서 링크로 이동합니다.
                <br />
                해당 링크에서 지원서를 작성해주세요.
                <div>
                  <ActionButton
                    onClick={() => {
                      if (applyUri) {
                        window.open(applyUri, '_blank');
                      }
                    }}
                  >
                    가입 신청서
                  </ActionButton>
                </div>
              </div>
            </>
          )}
          {!isSubscriptionPeriod && (
            <>
              <div>
                <StyledIcon className="fas fa-exclamation-circle"></StyledIcon>
              </div>
              <div>
                현재 가입 신청 가능 기간이 아닙니다.
                <br />
                자세한 사항은 동아리 회장에게 문의해주세요.
              </div>
            </>
          )}
        </Content>
      </WhiteBlock>
    </Block>
  );
};

export default withRouter(Apply);
