export default {
    name: 'like',
    title:  'Like',
    type: 'document',
    fields: [
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy',
        },
        {
            name: 'userId',
            title: 'UserID',
            type: 'string',
        },
    ]
}