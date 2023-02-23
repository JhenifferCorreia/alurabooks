import IconesHeader from '../../components/IconesHeader';
import Logo from '../../components/Logo';
import OpcoesHeader from '../../components/OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer >
    )
}

export default Header