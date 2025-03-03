<script>
export default {
  name: "Projects",
};
</script>

<template>
  <div class="SectionBox" id="ProjectBox">
    <h4 class="SectionHeading">Featured Projects</h4>
    <div class="Project">
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pA789wwDufVe54Wkuz2Ppg.gif"
      />
      <b
        >🧠 Creating a Handwritten Digit Generator with GANs: A Step-by-Step
        Guide</b
      >
      <a
        >Developed a GAN which can generate hand written digit images. Developed
        using a generator followed by descriminator.</a
      ><button type="button" class="btn">more</button>
    </div>

    <!--project break -->
    <div class="Project">
      <img
        src="https://www.simplilearn.com/ice9/free_resources_article_thumb/PlottingData.PNG"
      />
      <b>📈✨ LSTM-Powered RNN for Predicting Google Stock Prices 🚀📊</b>
      <a
        >This LSTM-based RNN predicts Google stock prices using historical data.
        With four LSTM layers and 71,051 parameters, the model was trained on
        1275 timestamps for 100 epochs, achieving a final loss of 0.0015,
        ensuring accurate forecasts.</a
      ><button type="button" class="btn">more</button>
    </div>
    <!--project break -->
    <div class="Project">
      <img
        src="https://static.vecteezy.com/system/resources/previews/007/629/446/non_2x/illustration-of-connecting-multiple-devices-to-a-cloud-server-sketch-style-illustration-vector.jpg"
      />
      <b
        >🌐🚀 Personal Ecosystem: Full-Stack Development on Raspberry Pi with AI
        Integration 🔥💻</b
      >
      <a
        >This full-stack project leverages Raspberry Pi, MySQL, FastAPI, and
        React.js, deployed using Uvicorn. It features a FastAPI backend with a
        MySQL database and an interactive React.js frontend, showcasing
        expertise in backend development, front-end design, and AI-driven
        solutions.</a
      ><button type="button" class="btn">more</button>
    </div>
    <!--project break -->
    <div class="Project">
      <img
        src="https://mention.com/wp-content/uploads/2023/10/customer-success-strategy-sentiment-analysis-1024x683.jpg"
      />
      <b
        >📝🔍 Sentiment Analysis with Lexicon-Based Approach: Unlocking Customer
        Insights 💡📊</b
      >
      <a
        >This project leverages a Lexicon-Based Sentiment Analysis approach
        using Python, Pandas, and NLTK's Bing Liu Opinion Lexicon to classify
        customer reviews as positive or negative. It processes JSON-formatted
        review data, tokenizes text, and assigns sentiment scores based on
        predefined word dictionaries. The final sentiment scores are aggregated
        and analyzed against overall product ratings, providing valuable
        insights into customer feedback. 🚀📊</a
      ><button type="button" class="btn">more</button>
    </div>
    <!--project break -->
  </div>
</template>

<style></style>
