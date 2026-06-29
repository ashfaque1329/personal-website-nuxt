export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
        throw createError({
            statusCode: 400,
            message: 'Name, email, and message are required'
        })
    }

    console.log('Contact form submission:', { name, email, subject, message })

    return {
        success: true,
        message: 'Message received successfully'
    }
})