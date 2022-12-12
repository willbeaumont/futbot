# Diagflow Notes

## Basics/Vocab

**Agent:** Aka chatbot that handles conversations with end-users

**Flows:** Conversation flow(s) follow topics and a defined conversational path. Simple agent might only need one flow, where complicated could need many.

**Pages:** Handles the state of the CX session. Think of it as a topic where the agent is trying to get information from the user.

**Entity types:** Data extracted from the end-user's conversation.

**Parameters:** Name and entity type, used to perform logic or generate responses.

**Forms:** List of parameters that should be collected from the end-user on a given page. The agent interacts with the end-user until the form is complete.

**Intents:** The end-users intention for one conversation turn. Intent contain training phrases and parameters.

**Fulfillment:** The agent's conversational turn must be: (1) response with an answer, (2) query for information, or (3) session termination.

**State handlers (handlers):** Controls the conversation by creating responses and/or transitioning the current page. There are three types of handler data: (1) Handler requirements that need to be satisfied to affect a session, (2) Handler fulfillment creates a response, or (3) Handler transition target to change the current page. There are two types of handlers: (1) Routes are when end-user input matches an intent/condition, or (2) Event handlers when something predefined or unexpected happens.

## ChatGPT Queries

I tried initially to use Diagflow by only asking ChatGPT questions. It ended up being more helpful to follow the quickstart and tutorials available at https://cloud.google.com/dialogflow/es/docs/contexts-input-output.

### Steps

*Prompt: what are the steps to use Diagflow?*

1. Create a Dialogflow account and sign in to the Dialogflow Console.
1. Create a new agent or select an existing agent to work with.
1. Define the intents for your agent, which specify the user's intentions and the corresponding responses from your agent.
1. Add training phrases to each intent, which are examples of what users might say to trigger that intent.
1. Optionally, create entities to extract relevant information from user input, such as dates, times, and numbers.
1. Test your agent's ability to understand user input and generate appropriate responses.
1. Integrate your agent with your preferred messaging platform or other service to make it available to users.
1. Monitor the performance of your agent and continue to improve it over time by adding moe intents, training phrases, and entities as needed.

#### Create a Dialogflow account

#### Create a new agent

*Prompt: how do you create a new agent?*

To create a new agent in Dialogflow, follow these steps:
1. Sign in to the Dialogflow Console and click on the "Create Agent" button in the top right corner of the page.
1. Enter a name for your agent and select the default language and time zone.
1. Choose whether to use the small talk feature, which allows your agent to have conversations on common topics.
1. Select the Google Project associated with your agent, or create a new project if you don't have one already.
1. Click on the "Create" button to create your new agent.

Once your agent has been created, you can begin defining intents, training phrases, and entities to make your agent more intelligent and useful.

#### Define intents

*Prompt: how do you define the intents for your agent?*

Intents in Dialogflow are used to identify the intention behind a user's input. They represent the various things a user might say to your chatbot, such as asking a question or making a request. To define the intents for your agent, follow these steps:
1. Sign in to your Dialogflow account and open the agent you want to work with.
1. Click on the "Intents" tab in the left sidebar and then click on the "Create Intent" button.
1. Give your intent a name that accurately describes the user's intention. For example, if the intent is to ask a question, you might name it "question."
1. In the "Training Phrases" section, add a few examples of what a user might say to trigger this intent. These are called training phrases, and they help Dialogflow learn to recognize the intent.
    1. *How many "Training Phrases" should I make?*
        >There is no set number of training phrases that you should include for each intent in Dialogflow. The number of training phrases you need will depend on the complexity of your chatbot and the variety of ways a user might express the same intent.
        >
        >As a general rule, it's a good idea to include a diverse set of training phrases to cover as many different variations as possible. This will help Dialogflow learn to recognize the intent more accurately and respond appropriately to a wider range of user input.
        >
        >However, it's also important not to overdo it. If you include too many training phrases, it can make your intents harder to manage and can potentially lead to confusion or errors. A good rule of thumb is to start with a few core training phrases and then add more as needed based on how well your chatbot is performing.
5. In the "Response" section, add the text or speech that you want your chatbot to respond with when it detects this intent. You can also add custom variables and responses for different platforms, such as Facebook or Slack.
1. Click on the "Save" button to save your intent.

Repeat this process for each intent you want to define for your agent. You can also edit or delete existing intents by clicking on the "Edit" or "Delete" buttons in the list of intents.
