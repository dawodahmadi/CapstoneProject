import React, { useState, useEffect } from 'react';
import { GiftedChat, InputToolbar, Composer, Send, Bubble, Time, Avatar, TypingIndicator } from 'react-native-gifted-chat';
import { IconButton } from 'react-native-paper';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text, TouchableOpacity } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [defaultMessageCounter, setDefaultMessageCounter] = useState(0);

  useEffect(() => {
    // Simulating initial messages
    setMessages([
      {
        _id: 1,
        text: 'Welcome to Capstone! How can we assist you today?',
        createdAt: new Date(),
        user: { _id: 2, name: 'Capstone Assistant' },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    const userMessage = {
      _id: newMessages[0]._id || Math.round(Math.random() * 1000000), // Generate a unique ID if not provided
      text: newMessages[0].text,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };

    setMessages((prevMessages) => GiftedChat.append(prevMessages, [userMessage]));

    // Handle user input or predefined options
    handleUserInput(newMessages[0].text);
  };

  const handleUserInput = (userInput) => {
    // Handle predefined options
    const optionResponses = {
      'How do I request a ride?': 'To request a ride, simply tap on the "Request Ride" button in the app.',
      'Is there a promo code available?': 'Yes, you can find available promo codes in the "Promotions" section of the app.',
      'How can I update my payment method?': 'You can update your payment method in the "Payment" section of the app.',
      'What types of vehicles do you offer?': 'We offer a variety of vehicles, including cars, SUVs, and more.',
      'Can I schedule a ride in advance?': 'Yes, you can schedule a ride in advance using the "Schedule Ride" feature in the app.',
      'How do I view my ride history?': 'You can view your ride history in the "History" section of the app.',
      'Is there a loyalty program?': 'Yes, we have a loyalty program. Check the "Rewards" section for more details.',
      'How can I contact customer support?': 'You can contact customer support through the "Help" or "Contact Us" section of the app.',
      'Tell me about safety features.': 'We prioritize your safety with features like driver background checks and ride tracking.',
      'What areas do you operate in?': 'We operate in various cities. Check the app for a list of available locations.',
    };

    // If the user input matches a predefined option, show the corresponding response
    if (optionResponses[userInput]) {
      const botMessage = {
        _id: messages.length + 1,
        text: optionResponses[userInput],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Capstone Assistant',
        },
      };

      setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
      setDefaultMessageCounter(0); // Reset the counter when a valid response is provided
    } else {
      // If the user input is not a predefined option, show a default response with a limit
      if (defaultMessageCounter < 5) {
        const botMessage = {
          _id: messages.length + 1,
          text: 'I apologize, but I am not sure how to respond to that. Please choose from the options below to see available options.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Capstone Assistant',
          },
        };

        setMessages((prevMessages) => GiftedChat.append(prevMessages, [botMessage]));
        setDefaultMessageCounter((prevCounter) => prevCounter + 1); // Increment the counter
      }
    }
  };

  const renderInputToolbar = (props) => (
    <InputToolbar {...props} containerStyle={styles.inputToolbar} />
  );

  const renderComposer = (props) => (
    <Composer {...props} placeholder="Type your question or issue..." />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View style={styles.sendButtonContainer}>
        <IconButton icon="send" size={24} color="#0084FF" />
      </View>
    </Send>
  );

  const renderAvatar = (props) => <Avatar {...props} />;

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        left: { backgroundColor: '#F0F0F0' },
        right: { backgroundColor: '#0084FF' },
      }}
    />
  );

  const renderTime = (props) => <Time {...props} />;

  const onLoadEarlier = () => {
    // Implement logic to load earlier messages and append to the existing messages state
  };

  const renderTypingIndicator = () => <TypingIndicator />;

  const quickReplyOptions = [
    'How do I request a ride?',
    'Is there a promo code available?',
    'How can I update my payment method?',
    'What types of vehicles do you offer?',
    'Can I schedule a ride in advance?',
    'How do I view my ride history?',
    'Is there a loyalty program?',
    'How can I contact customer support?',
    'Tell me about safety features.',
    'What areas do you operate in?',
  ];

  const renderQuickReplies = () => (
    <View style={styles.quickReplyContainer}>
      {quickReplyOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.quickReplyOption}
          onPress={() => handleQuickReply(option)}
        >
          <Text style={styles.quickReplyText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const handleQuickReply = (response) => {
    // Handle quick reply selection
    onSend([{ text: response }]);
  };

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={(newMessages) => onSend(newMessages)}
        user={{
          _id: 1,
        }}
        renderInputToolbar={renderInputToolbar}
        renderComposer={renderComposer}
        renderSend={renderSend}
        renderAvatar={renderAvatar}
        renderBubble={renderBubble}
        renderTime={renderTime}
        onLoadEarlier={onLoadEarlier}
        renderTypingIndicator={renderTypingIndicator}
        renderFooter={renderQuickReplies}
      />
      {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
    </View>
  );
};

const styles = StyleSheet.create({
  inputToolbar: {
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8',
  },
  sendButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  quickReplyContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginLeft: 10,
  },
  quickReplyOption: {
    backgroundColor: '#0084FF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 5,
  },
  quickReplyText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ChatScreen;
