import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,.postCommentBox {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  .loading{background: ${({ theme }) => theme.body};}


  header{
      background: ${({ theme }) => theme.navBackColor};
  }
  

   header > input, .modalPost form > textarea{background-color: ${({ theme }) => theme.body};}

  .nav-toggle svg{fill: ${({ theme }) => theme.text};}
  
  .action-btn > svg, .routeNav > svg, .plugs svg, .demo-ev svg, .theme-setter svg,.event-footer > svg:nth-of-type(1), .event-footer > svg:nth-of-type(2),.event-content > span > svg, .action-icon > svg.comment,li.Post  svg, li.Comment  svg,header svg,li.profile-deets > svg, .modalPost svg,.settings-container > h2 > a > svg,.page-title > h1 > svg{stroke: ${({ theme }) => theme.text};}

  .modal{background:${({ theme }) => theme.modal};}

  header > div > span{background:${({ theme }) => theme.text};}

  .routeNav,li.Post, li.Comment, .to-lync, .plugs, .alert, .profile-header,.page-title, .demo-ev > div, .ex-event,.post-button,.pop-up-nav,.chat-list > ul > li, li.profile-deets,.modalPost, .post-menu{background:${({ theme }) => theme.backColor}; border:1px solid ${({ theme }) => theme.toggleBorder};}
  
  header > input, header, .chat-list, .chat-content,.profile-nav.fixed, .modalPost form > textarea,.postCommentBox,.set-cont > input[type*='text'],.select-option{border-style: none; border:1px solid ${({ theme }) => theme.toggleBorder};}


  li.profile-deets > span{color:${({ theme }) => theme.backColor}}

  .chat-content > div > form,.chat-content > div > form > textarea,.chat-container h1,ul.profile-nav.fixed{background:${({ theme }) => theme.backColor};}

  .action-btn, .event-footer,h3.bottom,.chat-content > div > form,.settings-container > h2:nth-of-type(1){ border-style: none;border-top:1px solid ${({ theme }) => theme.toggleBorder};}

  div.chat-content > div > form > textarea{border-right:1px solid ${({ theme }) => theme.toggleBorder};}

  .cart-list h3,.plugs h3, .to-lync h3,.pop-up-nav > li.mobile,.chat-container h1,li.profile-deets .party-title,.settings-container > h2,.settings-container > h2:nth-of-type(1){border-bottom:1px solid ${({ theme }) => theme.toggleBorder};}
  
  .alert.unseen,.chat-list > ul > li > a.chosen{background-color: ${({ theme }) => theme.unseen};}

  `;
