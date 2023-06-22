import showModal from './modal';
import createElement from '../../helpers/domHelper';

export default function showWinnerModal(fighter) {
    const container = createElement({ tagName: 'div' });
    const winnerImg = createElement({
        tagName: 'img',
        attributes: {
            src: `${fighter.source}`,
            alt: `${fighter.name}`
        }
    });
    const winnerName = createElement({ tagName: 'h4' });
    winnerName.textContent = fighter.name;
    container.appendChild(winnerName);
    container.appendChild(winnerImg);
    const winnerInfo = {
        title: '...And The WINNER!',
        bodyElement: container
    };

    showModal(winnerInfo);
}
