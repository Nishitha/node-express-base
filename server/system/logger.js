import logger from 'winston';

function removeLastCharacter(text) {
    return text.slice(0, -1);
}

function removeEndingNewLineCharacter(message) {
    if (message.length > 0) {
        const lastCharacter = message[message.length - 1];

        if (lastCharacter === '\n') {
            return removeLastCharacter(message);
        }
    }

    return message;
}

export function getInfoStream() {
    return {
        write: (message) => {
            logger.info(removeEndingNewLineCharacter(message));
        }
    };
}

export function getLogger() {
    return logger;
}

export default {
    getInfoStream,
    getLogger
}
