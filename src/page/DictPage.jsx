import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
# 파이썬이란?

# 파이썬(Python)에 대한 소개

## 1. 파이썬이란?

파이썬은 1989년에 Guido van Rossum에 의해 설계되고 1991년에 발표된 고급 프로그래밍 언어입니다. 배우기 쉽고 가독성이 좋은 문법으로 유명하며, 다양한 분야에서 활용되고 있습니다. 파이썬은 객체지향, 동적 타이핑, 인터프리터 언어로서 다양한 운영 체제에서 사용됩니다.

## 2. 특징

### 2.1 간결하고 가독성이 좋은 문법

파이썬의 문법은 간결하며 가독성이 높아 코드를 이해하기 쉽습니다. 들여쓰기를 통한 블록 구조를 사용하므로 코드의 가독성이 높아지고, 괄호의 사용이 줄어듭니다.

### 2.2 다양한 라이브러리와 프레임워크

파이썬은 풍부한 표준 라이브러리와 다양한 서드파티 라이브러리, 프레임워크를 지원합니다. 이는 개발을 빠르고 효율적으로 할 수 있도록 도와줍니다.

### 2.3 크로스 플랫폼 지원

파이썬은 다양한 운영 체제에서 동작하며, 이식성이 뛰어나다는 특징이 있습니다. 한 번 작성한 코드를 수정 없이 여러 플랫폼에서 실행할 수 있습니다.

### 2.4 동적 타이핑

변수의 자료형을 미리 선언할 필요가 없는 동적 타이핑 언어입니다. 이는 개발자에게 편의성을 제공하며, 코드 작성을 더 유연하게 만듭니다.

<aside>
💡 파이썬은 다양한 분야에서 활용되며, 웹 개발, 데이터 과학, 인공지능, 자동화, 게임 개발 등에서 널리 사용되는 언어로, 간결한 문법과 풍부한 라이브러리 생태계로 개발 생산성을 높입니다.

</aside>

# 1. GitHub Pages 소개

## 1.1 GitHub Pages란?

- GitHub이 제공하는 정적 웹 페이지 호스팅 서비스입니다.
- GitHub Repository에서 웹 페이지를 호스팅할 수 있어 편리합니다.
- 무료 서비스이며 간단한 배포 과정을 제공합니다.

# 2. GitHub Pages 배포

1. 해당 Repository의 Settings > Pages 메뉴로 이동합니다.
2. 호스팅 할 브랜치를 설정하고 Save 버튼을 클릭합니다.
3. 페이지가 완전히 호스팅되면 상단에 활성화된 호스팅 페이지 주소가 나타납니다.
`;

export default function DictPage() {
  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
}
