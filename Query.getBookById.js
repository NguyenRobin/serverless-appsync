import { util } from "@aws-appsync/utils"

export function request(ctx) {
  console.log("REQUEST", ctx)
  const { bookId } = ctx.arguments

  console.log(bookId)
  return {
    operation: "GetItem",
    key: util.dynamodb.toMapValues({ pk: bookId })
  }
}

export function response(ctx) {
  console.log("RESPONSE", ctx)
  return ctx.result
}
