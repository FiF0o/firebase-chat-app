/**
 * Created by jonlazarini on 14/05/17.
 */
export const belongToCurrentUser = (userId, messageId) => (
    userId && messageId === userId
);
