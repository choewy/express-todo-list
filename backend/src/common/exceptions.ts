export const invalidEmailException = () => {
  throw {
    code: 400,
    message: '이메일을 입력하세요.',
  };
};

export const invalidNameException = () => {
  throw {
    code: 400,
    message: '이름을 입력하세요.',
  };
};

export const invalidPasswordException = () => {
  throw {
    code: 400,
    message: '비밀번호를 입력하세요.',
  };
};

export const incorrectPasswordException = () => {
  throw {
    code: 400,
    message: '비밀번호가 일치하지 않습니다.',
  };
};

export const alreadyExistAccountException = () => {
  throw {
    code: 418,
    message: '이미 존재하는 계정입니다.',
  };
};

export const notFoundAccountException = () => {
  throw {
    code: 404,
    message: '존재하지 않는 사용자 계정입니다.',
  };
};

export const databaseException = (error: any) => {
  throw {
    code: 500,
    message: '데이터베이스 처리 과정 중 발생하였습니다.',
    error,
  };
};

export const needSignInException = (error: any) => {
  throw {
    code: 403,
    message: '로그인이 필요합니다.',
    error,
  };
};

export const invalidTokenException = (error: any) => {
  throw {
    code: 401,
    message: '로그인이 필요합니다.',
    error,
  };
};

export const expiredTokenException = (error: any) => {
  throw {
    code: 419,
    message: '토큰이 만료되었습니다.',
    error,
  };
};

export const invalidGroupTitleException = () => {
  throw {
    code: 400,
    message: '그룹 제목을 입력하세요.',
  };
};

export const invalidGroupIdException = () => {
  throw {
    code: 400,
    message: '잘못된 그룹 정보입니다.',
  };
};

export const notFoundGroupException = () => {
  throw {
    code: 404,
    message: '존재하지 않는 그룹입니다.',
  };
};
