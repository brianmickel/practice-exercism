class ReverseString {
  static reverse(message: string) {
    let reversedMessage = '';
    for (let i = message.length - 1; i >= 0; i--) {
      reversedMessage += message[i];
    }
    return reversedMessage;
  }
}

export default ReverseString
