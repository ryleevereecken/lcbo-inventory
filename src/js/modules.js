export const getLcboPage = () => {
    const key = 'MDowYWI4YTgwYy0yOTFiLTExZTgtYjNiYy1mMzYwMGYxYjI1M2Q6TlFsS1dBSlJsQXFlOUltZ0M4M2hVM0FIQ21IZW5ZWktQYTNQ'
   
    return ( 
        fetch( 'http://lcboapi.com/products?order=id.asc&access_key=' + key )
    )
}   