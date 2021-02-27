'use strict';
const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'index';
  }
  async getArticleList() {
    const sql =
      'SELECT article.id AS id,type.typeName as typeName,article.title as title,article.article_content as article_content,article.introduce as introduce,article.view_count as view_count FROM article LEFT JOIN type ON article.type_id=type.id;';
    const data = await this.app.mysql.query(sql);
    this.ctx.body = data;
  }
}
module.exports = HomeController;
