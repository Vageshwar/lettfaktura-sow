import { BUTTON_TYPES } from "./constant";

export const getClassNameBasedOnClass = (type) => {
    switch (type) {
        case BUTTON_TYPES.PRIMARY:
            return 'btn-primary';
        case BUTTON_TYPES.SECONDARY:
            return 'btn-secondary';
        case BUTTON_TYPES.TERTIARY:
            return 'btn-tertiary';
        default:
            return 'btn-primary';
    }
}