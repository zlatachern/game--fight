import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    function createProperty(keyValue) {
        const nameElement = createElement({ tagName: 'span', className: 'fighter-preview___property' });
        nameElement.innerText = keyValue.join(': ').replace(/(\w+):/, subStr => subStr.toUpperCase());

        return nameElement;
    }

    function createPreviewImage(source) {
        const attributes = { src: source };
        const imgElement = createElement({
            tagName: 'img',
            className: 'fighter-image___preview',
            attributes
        });

        if (position === 'right') {
            imgElement.style.transform = 'scale(-1, 1)';
        }

        return imgElement;
    }

    if (fighter) {
        const keyValueArrayOfObject = Object.entries(fighter);
        fighterElement.append(createPreviewImage(fighter['source']));
        keyValueArrayOfObject
            .filter(keyValueAll => keyValueAll[0] !== '_id' && keyValueAll[0] !== 'source')
            .forEach(keyValue => fighterElement.append(createProperty(keyValue)));
    }

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
